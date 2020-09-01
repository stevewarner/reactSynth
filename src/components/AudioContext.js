import { Synth } from 'tone'

const synth = new Synth({
  oscillator: {
    type: 'sine',
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  },
}).toMaster()

export const triggerNoteAttack = (noteName, time) => {
  return time
    ? synth.triggerAttackRelease(noteName, '8n')
    : synth.triggerAttack(noteName)
}

export const triggerNoteRelease = () => {
  // TODO trigger release of only that keyup
  synth.triggerRelease()
}

export const setOscillatorType = (value) => {
  synth.oscillator.type = value
}

export const setADSR = (name, value) => {
  synth.envelope[name] = value
}

export const toggleGlide = (value) => {
  synth.portamento = value ? 0.05 : 0
}

