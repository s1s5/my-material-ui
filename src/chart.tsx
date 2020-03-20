import * as React from 'react'

import {
    Container, Paper, Box,
    Avatar, Grid,
    Card, CardContent,
    TextField, Button,
    TextareaAutosize,
} from '@material-ui/core'

import withWidth from '@material-ui/core/withWidth'

import {
    makeStyles, Theme,
} from '@material-ui/core/styles'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis, YAxis,
} from 'recharts';

const data = [
    {name: 'A', uv: 400, pv: 2400, amt: 2400},
    {name: 'B', uv: 200, pv: 2800, amt: 3000},
    {name: 'C', uv: 100, pv: 3000, amt: 1000},
    {name: 'D', uv: 150, pv: 3600, amt: 2000},
    {name: 'E', uv: 250, pv: 5000, amt: 1000},
];

const LineChartExample = () => (
    <ResponsiveContainer width="100%" aspect={ 4 / 2.0} >
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
)

const MyChart = () => {
    return (
        <Container>
          <Grid container spacing={ 1 }>
            <Grid item xs={12}>
              <Card>
                  <CardContent>
                    <LineChartExample/>
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Container>
    )
}

export default MyChart
