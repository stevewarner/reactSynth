import React, { useContext } from 'react'
import Context from '../Context'
import Slider from './Slider'
import styles from './index.less'

const Controls = () => {
  // const { synth, setSynth } = Context
  const { synth, setOsc, setOctave, setControl, setGlide } = useContext(Context)

  return (
    <div className={styles.panel}>
      <div className={styles.section}>
        <h4>Oscillator</h4>
        <div>
          <p>Waveform</p>
          <select value={synth.osc} onChange={(e) => setOsc(e.target.value)}>
            <option value="sine">Sine</option>
            <option value="triangle">Triangle</option>
            <option value="square">Square</option>
          </select>
        </div>

        <div>
          <p>Octave</p>
          <input
            type="number"
            name="octave"
            value={synth.octave}
            min={1}
            max={6}
            onChange={(e) => setOctave(Number(e.target.value))}
          />
        </div>
        <div className={styles.switch}>
          <label htmlFor="glideToggle">
            <p>Glide</p>
            <input
              id="glideToggle"
              type="checkbox"
              value="glide"
              checked={synth.glide}
              onChange={() => setGlide(!synth.glide)}
            />
            <span className={styles.slider} />
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Envelope</h4>
        <div className={styles.row}>
          <Slider title="attack" min={0.005} max={15} step={0.001} />
          <Slider title="decay" min={0.005} max={15} step={0.001} />
          <Slider title="sustain" min={0} max={1} step={0.01} />
          <Slider title="release" min={0.005} max={15} step={0.001} />
        </div>
      </div>
    </div>
  )
}

export default Controls
