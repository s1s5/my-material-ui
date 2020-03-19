import { hot } from 'react-hot-loader/root'
import * as React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* import { Theme, useMediaQuery } from '@material-ui/core';*/
import { Container, Card, CardContent, Grid, GridList, GridListTile } from '@material-ui/core';
import { ThemeProvider, useTheme } from '@material-ui/styles'

import theme from './theme'

import MainLayout from './main-layout'
import CardList from './card-list'
import Tab from './tab'
import MyStepper from './stepper'
import MyDialog from './dialog'
import MyCalendar from './cal'
import MyChat from './chat'

const Hoge = () => {
    return (
        <Container>
          <Grid container spacing={ 1 }>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  hello world
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  hello world
                  hello world
                  hello world
                  hello world
                  hello world
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  hello world
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>)
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
                <Route path="/cardlist" exact component={ CardList }/>
                <Route path="/tab" exact component={ Tab }/>
                <Route path="/stepper" exact component={ MyStepper }/>
                <Route path="/dialog" exact component={ MyDialog }/>
                <Route path="/calendar" exact component={ MyCalendar }/>
                <Route path="/chat" exact component={ MyChat }/>
              </Switch>
            </MainLayout>
          </Router>
        </ThemeProvider>
    )
}

export default hot(App)
