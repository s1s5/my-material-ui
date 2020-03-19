import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
    Theme,
    Paper,
    Tabs,
    Tab,
    Typography,
    Box,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Divider,
    TextField,
    FormControl, FormLabel, RadioGroup, Radio,
    InputLabel, Select, MenuItem,
    Switch,
} from '@material-ui/core'

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
//    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    buttonGroup: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    textFieldContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    // 効果なし...
    // switchField: {
    //     transition: theme.transitions.create(
    //         ['color'],
    //         { duration: 1000 }
    //     ),
    // }
}))


const TabTest = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(1)
    const [radio_value, set_radio_value] = React.useState("female")
    const [select_value, set_select_value] = React.useState("10")
    const [switch_checked, set_switch_checked] = React.useState(false)
    const [checked, setChecked] = React.useState(false)
    
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const Panel = (props: any) => {
        return <Typography
        component="div"
        role="tabpanel"
        hidden={props.value !== props.index}
        id={`scrollable-auto-tabpanel-${props.index}`}
        aria-labelledby={`scrollable-auto-tab-${props.index}`}
        {...props.other}
        >
        {value === props.index && <Box p={3}>{props.children}</Box>}
    </Typography>
    }

    /* const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54')); */
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    
    return (
        <Paper className={classes.root}>
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <Panel value={value} index={0}>
        <div className={ classes.buttonGroup }>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            Link
          </Button>
        </div>
      </Panel>
      <Panel value={value} index={1}>
        <FormGroup row>
          <FormControlLabel
              control={
            <Checkbox checked={checked} onChange={ () => {setChecked(!checked) } } name="checkedA" />
            }
              label="Secondary"
          />
        </FormGroup>
        <Divider/>
        <FormGroup row>
          <form className={classes.textFieldContainer} noValidate>
            <TextField
                id="time"
                label="Alarm clock"
                type="time"
                defaultValue="07:30"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
          </form>
        </FormGroup>
        <FormGroup row>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={(date) => { date && setSelectedDate(date) } }
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
          </MuiPickersUtilsProvider>
        </FormGroup>

        <Divider/>
        <Box mt={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={radio_value} onChange={ (_, new_value) => { set_radio_value(new_value) } }>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
          </FormControl>
        </Box>

        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select_value}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => { set_select_value(event.target.value as string) }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Switch
            checked={switch_checked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { set_switch_checked(event.target.checked) }}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
      </Panel>
      <Panel value={value} index={2}>
        panel 2
      </Panel>
    </Paper>
    )
}

export default TabTest
