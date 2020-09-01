import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../../Context'
import styles from './index.less'

const Slider = ({ title, min, max, step }) => {
  const { synth, setEnvelope } = useContext(Context)

  return (
    <div className={styles.knob}>
      <p>{title}</p>
      <input
        type="range"
        orient="vertical"
        min={min}
        max={max}
        step={step}
        value={synth[title]}
        onChange={(e) => setEnvelope(title, e.target.value)}
      />
      <p>{synth[title]}</p>
    </div>
  )
}

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
}

export default Slider
