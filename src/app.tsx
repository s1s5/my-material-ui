import { hot } from 'react-hot-loader/root'
import * as React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* import { Theme, useMediaQuery } from '@material-ui/core';*/
import { Container, Card, CardContent, GridList, GridListTile } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/styles'

import theme from './theme'

import MainLayout from './main-layout'

const Hoge = () => {
    return (
        <Container>
          <GridList cellHeight={800} cols={ 2 }>
            <GridListTile cols={ 1 }>
              <Card style={{height: "99%"}}>
                <CardContent>
                  hello world
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile cols={ 1 }>
              <Card>
                <CardContent>
                  hello world
                </CardContent>
              </Card>
            </GridListTile>
            <GridListTile cols={ 1 }>
              <Card>
                <CardContent>
                  hello world
                </CardContent>
              </Card>
            </GridListTile>
          </GridList>
        </Container>)
    return (<Container>
      <Card>
        <CardContent>
          <h1>hello world</h1>
        </CardContent>
        <CardContent>
          <h1>hello world</h1>
        </CardContent>
      </Card>
    </Container>)
}

const App = () => {
    return (
        <ThemeProvider theme={ theme }>
          <Router>
            <MainLayout>
              <Switch>
                <Route path="/dashboard" exact component={ Hoge }/>
                <Route path="/" exact component={ Hoge }/>
              </Switch>
            </MainLayout>
          </Router>
        </ThemeProvider>
    )
}

export default hot(App)
