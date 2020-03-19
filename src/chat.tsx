import * as React from 'react'

import {
    Container, Paper, Box,
    Avatar, Grid,
    Card, CardContent,
    TextField, Button,
} from '@material-ui/core'
import {
    makeStyles, Theme,
} from '@material-ui/core/styles'

import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
//        height: "100%",
        display: "flex",
        flexBasis: "100%",
        flexDirection: "column",
    },
    chatHistory: {
        //        height: "calc(100% - 80px - 16px)",
        // overflow: "hidden",
        flexGrow: 1,
        // maxHeight: "100%",
    },
    chatInput: {
//        height: "80px",
        display: "flex",
        backgroundColor: "white",
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    chatTextFieldBox: {
        marginLeft: `${theme.spacing(1)}px`,
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        backgroundColor: "#f8f8f8",
        lineHeight: '1.2em',
        flexGrow: 1,
    },
    chatTextField: {
        width: "100%",
        border: "0",
        backgroundColor: "inherit",
        margin: "0",
        outline: 'none',
    },
}))

const Chat = () => {
    const classes = useStyles()

    return (
        <Box className={ classes.root }>
          <Box padding={1} className={ classes.chatHistory }>
            <Grid container spacing={ 1 }>
              <Grid item xs={2}>
                <Avatar>W</Avatar>
              </Grid> 
              <Grid item xs={10}>
                <Card>
                  <CardContent>
                    message<br/> messagemessage messagem

                  </CardContent>
                </Card>
              </Grid> 

              <Grid item xs={11}>
                <Card>
                  <CardContent>
                    message message
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={1}>
              </Grid>
            </Grid>
          </Box>
          <Box className={ classes.chatInput }>
            {/* <Avatar>X</Avatar> */}
            <Box boxShadow={0} borderRadius={10} className={ classes.chatTextFieldBox }>
              <input type="text"  className={ classes.chatTextField }/>
            </Box>
            <Button>
              <SendIcon/>
            </Button>
          </Box>
        </Box>
    )
}

export default Chat
