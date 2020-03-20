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
    LineChart, Line,
    CartesianGrid,
    XAxis, YAxis,
    PieChart, Pie, Cell, PieLabelRenderProps
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

const PieChartExample = () => (
    <ResponsiveContainer width="100%" aspect={ 4 / 4.0} >
      <PieChart>
        <Pie data={data} dataKey="amt" fill="#8884d8"/>
      </PieChart>
    </ResponsiveContainer>
)

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF80FF'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: PieLabelRenderProps) => {
    const radius = (props.innerRadius! as number) + ((props.outerRadius! as number) - (props.innerRadius! as number)) * 0.5;
    const x = (props.cx! as number) + radius * Math.cos(-props.midAngle! * RADIAN);
    const y = (props.cy! as number) + radius * Math.sin(-props.midAngle! * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > (props.cx ? props.cx : 0) ? 'start' : 'end'} dominantBaseline="central">
          {`${((props.percent ? props.percent : 0) * 100).toFixed(0)}%`}
        </text>
    );
};

const PieChartExample2 = () => (
    <ResponsiveContainer width="100%" aspect={ 4 / 4.0} >
      <PieChart>
        <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="amt"
        >
          {
              data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
)

const MyChart = () => {
    return (
        <Container>
          <Grid container spacing={ 1 }>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                  <CardContent>
                    <LineChartExample/>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                  <CardContent>
                    <PieChartExample />
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                  <CardContent>
                    <PieChartExample2 />
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Container>
    )
}

export default MyChart
