import * as React from 'react'

import {
    MuiPickersUtilsProvider,
    Calendar,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';


type DateIOType = Date | null  // TODO

import jaLocale from "date-fns/locale/ja";

if (jaLocale.options) {  // TODO
    jaLocale.options.weekStartsOn = 0
}

import { makeStyles } from '@material-ui/styles'
import {
    Container, Card, CardContent,
    Theme, Divider,
    Table, TableBody, TableRow, TableCell, TableContainer
} from '@material-ui/core'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    calendar: {
    },
    calendarContent: {
        '&:last-child': {
            paddingBottom: 8,
        },
    },
    eventList: {
        flex: 1,
        overflow: "auto",
    },
    dateHeader: {
        // borderLeft: "4px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
    },
    displayFlex: {
        display:"flex",
    },
    center: {
        flex: "0 1 auto",
        margin: "auto",
    },
}))



// import 'rc-calendar/assets/index.css'
// import Calendar from 'rc-calendar'
// 
// import moment from 'moment';
// moment.locale('ja');
// import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';
//         <SingleDatePicker
//         id="date-picker"
//         date={date}
//         onDateChange={date => set_date(date)}
//         focused={focused}
//                   onFocusChange={({ focused }) => set_focused(focused)}
//                   numberOfMonths={1}
//                   displayFormat='YYYY-MM-DD'
//                   transitionDuration={0}
//               />

const Cal = () => {
    // const [focused, set_focused] = React.useState<boolean | null>(false)
    // const [date, set_date] = React.useState<moment.Moment | null>(null)
    const classes = useStyles()
    const [date, set_date] = React.useState(new Date())
    return (
        <Container className={ classes.root }>
          <Card className={ classes.calendar }>
            <CardContent className={ classes.calendarContent }>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ jaLocale }>
                <Calendar
                    date={ date }
                    onChange={(date: any, isFinish?: boolean) => {} }
                    renderDay={
                        (day: DateIOType, selectedDate: DateIOType, dayInCurrentMonth: boolean, dayComponent: JSX.Element) => {
                            if (day && day.getDate() == 10) {
                                return <div style={{background: "gray"}}>{ dayComponent }</div>
                            }
                            return dayComponent
                        }
                    }
                />
              </MuiPickersUtilsProvider>
            </CardContent>
          </Card>
          <Divider/>
          <Card className={ classes.eventList }>
            <CardContent>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell className={ classes.dateHeader } component="th" colSpan={ 3 }>
                        2020/03/20
                      </TableCell>
                    </TableRow>
                    <TableRow
                        hover
                        onClick={ () => { console.log("clicked!") } }>
                      <TableCell component="th">
                        10:00
                      </TableCell>
                      <TableCell>
                        some schedule
                      </TableCell>
                      <TableCell className={ classes.displayFlex }>
                        <NavigateNextIcon className={ classes.center }/>
                      </TableCell>
                    </TableRow>
                    <TableRow
                        hover
                        onClick={ () => { console.log("clicked!") } }>
                      <TableCell component="th">
                        12:00
                      </TableCell>
                      <TableCell>
                        some schedule
                      </TableCell>
                      <TableCell className={ classes.displayFlex }>
                        <NavigateNextIcon className={ classes.center }/>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Container>
    )
}

export default Cal
