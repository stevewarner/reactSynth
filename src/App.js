import React from 'react'
import './global.less'
import { Provider } from './components/Context'
import Keyboard from './components/Keyboard'
import Controls from './components/Controls'

const App = () => (
  <Provider>
    <h1>React & Tone.js Synth</h1>
    <Controls />
    <Keyboard />
  </Provider>
)

export default App
