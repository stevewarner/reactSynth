import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context'
// import { Synth } from 'tone'
import { triggerNoteAttack, triggerNoteRelease } from '../AudioContext'

import styles from './styles.less'

const Key = (props) => {
  const { note, isAccidental } = props
  const [isPlaying, setIsPlaying] = useState(false)
  const { synth } = useContext(Context)

  const allowedKeys = {
    65: 'C',
    87: 'C#',
    83: 'D',
    69: 'D#',
    68: 'E',
    70: 'F',
    84: 'F#',
    71: 'G',
    89: 'Ab',
    72: 'A',
    85: 'Bb',
    74: 'B',
    75: 'C5',
    79: 'C#5',
    76: 'D5',
  }

  const startNote = (e, noteName) => {
    if (e.keyCode === props.keyCode && !isPlaying && !e.repeat) {
      setIsPlaying(true)
      console.log(`${props.note}${synth.octave}`)
      triggerNoteAttack(`${props.note}${synth.octave}`)
    } else if (noteName === props.note && !isPlaying && !e.repeat) {
      e.preventDefault()
      setIsPlaying(true)
      console.log(`${noteName}${synth.octave}`)
      triggerNoteAttack(`${noteName}${synth.octave}`, '8n')
    }
  }

  const stopNote = (e, noteName) => {
    if (allowedKeys[e.keyCode] === props.note) {
      setIsPlaying(false)
      triggerNoteRelease()
    } else if (noteName === props.note) {
      e.preventDefault()
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', startNote)
    window.addEventListener('keyup', stopNote)

    return () => {
      window.removeEventListener('keydown', startNote)
      window.removeEventListener('keyup', stopNote)
    }
  }, [synth.octave])

  return (
    <>
      <button
        type="button"
        id={note}
        className={`
        ${isAccidental ? `${styles.accidental} ${styles.key}` : styles.key}
        ${isPlaying ? `${styles.playing} ${styles.key}` : null}
        `}
        onTouchStart={(e) => startNote(e, note)}
        onTouchEnd={(e) => stopNote(e, note)}
        onMouseDown={(e) => startNote(e, note)}
        onMouseUp={(e) => stopNote(e, note)}
        onMouseLeave={(e) => stopNote(e, note)}
      >
        <span className={styles.visuallyHidden}>
          Piano key
          {`${note}`}
        </span>
      </button>
    </>
  )
}

Key.propTypes = {
  isAccidental: PropTypes.bool,
  note: PropTypes.string.isRequired,
  keyCode: PropTypes.number.isRequired,
}

Key.defaultProps = {
  isAccidental: false,
}

export default Key
