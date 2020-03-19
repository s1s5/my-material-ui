import * as React from 'react'

import {
    MuiPickersUtilsProvider,
    Calendar,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';


type DateIOType = Date | null;

import jaLocale from "date-fns/locale/ja";

if (jaLocale.options) {
    jaLocale.options.weekStartsOn = 0
}

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
import { Container, Card, CardContent } from '@material-ui/core'

const Cal = () => {
    // const [focused, set_focused] = React.useState<boolean | null>(false)
    // const [date, set_date] = React.useState<moment.Moment | null>(null)
    const [date, set_date] = React.useState(new Date())
    return (
        <Container>
          <Card>
            <CardContent>
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
        </Container>
    )
}

export default Cal
