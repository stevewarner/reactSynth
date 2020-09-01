import React from 'react'
import Key from '../Key'
import styles from './styles.less'

const keys = [
  { note: 'C', keyCode: 65 },
  { note: 'C#', keyCode: 87 },
  { note: 'D', keyCode: 83 },
  { note: 'D#', keyCode: 69 },
  { note: 'E', keyCode: 68 },
  { note: 'F', keyCode: 70 },
  { note: 'F#', keyCode: 84 },
  { note: 'G', keyCode: 71 },
  { note: 'Ab', keyCode: 89 },
  { note: 'A', keyCode: 72 },
  { note: 'Bb', keyCode: 85 },
  { note: 'B', keyCode: 74 },
  // { note: 'C', keyCode: 75 },
  // { note: 'C#', keyCode: 79 },
  // { note: 'D', keyCode: 76 },
]

const Keyboard = () => (
  <div className={styles.keyboard}>
    {keys.map((key) => (
      <Key
        note={key.note}
        isAccidental={key.note.length === 2}
        keyCode={key.keyCode}
        key={key.keyCode}
      />
    ))}
  </div>
)

export default Keyboard
