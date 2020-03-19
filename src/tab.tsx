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
} from '@material-ui/core'



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
}))


const TabTest = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)
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
      </Panel>
      <Panel value={value} index={2}>
        panel 2
      </Panel>
    </Paper>
    )
}

export default TabTest
