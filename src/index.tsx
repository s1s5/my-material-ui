import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as React from 'react'
import { render } from 'react-dom'
import App from './app'

// const root = document.createElement('div')
// document.body.appendChild(root)
const root = document.getElementById('root')

render(<App />, root)
