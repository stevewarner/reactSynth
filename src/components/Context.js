import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { setOscillatorType, setADSR, toggleGlide } from './AudioContext'

const Context = React.createContext()

class Provider extends Component {
  // Context state
  constructor(props) {
    super(props)
    this.state = {
      synth: {
        oscillator: 'sine',
        octave: 4,
        glide: false,
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
      },
    }

    // Method to update state
    this.setOsc = (value) => {
      this.setState((prevState) => ({
        synth: {
          ...prevState.synth,
          oscillator: value,
        },
      }))
      console.log(value)
      setOscillatorType(value)
    }

    this.setOctave = (value) => {
      this.setState((prevState) => ({
        synth: {
          ...prevState.synth,
          octave: value,
        },
      }))
    }

    this.setEnvelope = (parameter, value) => {
      this.setState((prevState) => ({
        synth: {
          ...prevState.synth,
          [parameter]: value,
        },
      }))
      setADSR(parameter, value)
    }

    this.setControl = (parameter, value) => {
      this.setState((prevState) => ({
        synth: {
          ...prevState.synth,
          [parameter]: value,
        },
      }))
    }

    this.setGlide = (value) => {
      this.setState((prevState) => ({
        synth: {
          ...prevState.synth,
          glide: value,
        },
      }))
      toggleGlide(value)
    }
  }

  render() {
    const { children } = this.props
    const { synth } = this.state
    const { setOsc, setOctave, setEnvelope, setControl, setGlide } = this

    return (
      <Context.Provider
        value={{
          synth,
          setOsc,
          setOctave,
          setEnvelope,
          setControl,
          setGlide,
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

export { Provider }

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}
