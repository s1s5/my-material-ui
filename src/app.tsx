import { hot } from 'react-hot-loader/root'
import * as React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'

import theme from './theme'

import Dashboard from './dashboard'

const App = () => {
    return (
        <ThemeProvider theme={ theme }>
          <Router>
            <Route path='/' excact component={ () => <Dashboard/> } />
          </Router>
        </ThemeProvider>
    )
}

export default hot(App)
