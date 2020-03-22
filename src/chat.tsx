import * as React from 'react'

import {
    Container, Paper, Box,
    Avatar, Grid,
    Card, CardContent,
    TextField, Button,
    TextareaAutosize,
    CircularProgress,
} from '@material-ui/core'
import {
    makeStyles, Theme,
} from '@material-ui/core/styles'

import SendIcon from '@material-ui/icons/Send'

import VisibilitySensor from 'react-visibility-sensor'


const useStyles = makeStyles((theme: Theme) => ({
    root: {
//        height: "100%",
        display: "flex",
        flexBasis: "100%",
        flexDirection: "column",
        paddingLeft: "0px",
        paddingRight: "0px",
    },
    chatHistory: {
        //        height: "calc(100% - 80px - 16px)",
        // overflow: "hidden",
        flexGrow: 1,
        // maxHeight: "100%",
    },
//    messageCard: {
//        borderRadius: `${theme.spacing(1)}px`,
//    },
//    messageCardContent: {
//        color: '#444',
//        padding: `${theme.spacing(1)}px`,
//        '&:last-child': {
//            paddingBottom: `${theme.spacing(1)}px`,
//        },
//    },
    chatInput: {
//        height: "80px",
        display: "flex",
        backgroundColor: "white",
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    chatTextFieldBox: {
        marginLeft: `${theme.spacing(0)}px`,
        marginRight: `${theme.spacing(1)}px`,
        padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
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
        color: '#444',
    },
    sendIconBox: {
        display: "flex",
        padding: `${theme.spacing(0.1)}px ${theme.spacing(1)}px`,
    },
    center: {
        flex: "0 1 auto",
        margin: "auto",
        // backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    oppMessageBox: {
//        width: "100%",
        display: "flex",
    },
    oppMessageAvator: {
        flex: "0 1 auto",
        margin: "auto",
    },
    oppMessageCard: {
//        flexGrow: 1,
        marginLeft: `${theme.spacing(1)}px`,
        marginRight: `${theme.spacing(2)}px`,
        borderRadius: `${theme.spacing(1)}px`,
    },

    oppMessageCardContent: {
        color: '#444',
        padding: `${theme.spacing(1)}px`,
        '&:last-child': {
            paddingBottom: `${theme.spacing(1)}px`,
        },
    },
    loading: {
        display: 'flex',
        padding: `${theme.spacing(2)}px`,
    },
    loadingProgress: {
        flex: "0 1 auto",
        margin: "auto",
        color: "#888",
    },
}))

const Chat = () => {
    const classes = useStyles()
    const [input_div, set_input_div] = React.useState<HTMLDivElement | null>(null)
    React.useEffect(() => {
        if (input_div === null) {
            return
        }
        input_div.scrollIntoView()
    }, [input_div]);

    return (
        <Container className={ classes.root } maxWidth="sm">
          <Box padding={1} className={ classes.chatHistory }>
            <Grid container spacing={ 1 }>
              <Grid item xs={12}>
                <VisibilitySensor onChange={ (is_visible) => {console.log("is_visible=", is_visible)} }>
                  <div className={ classes.loading }>
                    <CircularProgress size={ 20 } color="inherit" className={ classes.loadingProgress }/>
                  </div>
                </VisibilitySensor>
              </Grid>

              <Grid item xs={12} className={ classes.oppMessageBox }>
                <Avatar className={ classes.oppMessageAvator }>You</Avatar>
                <Card className={ classes.oppMessageCard }>
                  <CardContent className={ classes.oppMessageCardContent }>
                    message<br/> messagemessage messagem
                  </CardContent>
                </Card>
                <div style={{flexGrow: 1}}></div>
              </Grid>

              <Grid item xs={12} className={ classes.oppMessageBox }>
                <div style={{flexGrow: 1}}></div>
                <Card className={ classes.oppMessageCard }>
                  <CardContent className={ classes.oppMessageCardContent }>
                    message<br/> messagemessage messagem
                  </CardContent>
                </Card>
                <Avatar className={ classes.oppMessageAvator }>Me</Avatar>
              </Grid>

              <Grid item xs={12} className={ classes.oppMessageBox }>
                <Avatar className={ classes.oppMessageAvator }>You</Avatar>
                <Card className={ classes.oppMessageCard }>
                  <CardContent className={ classes.oppMessageCardContent }>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                    message<br/>
                  </CardContent>
                </Card>
                <div style={{flexGrow: 1}}></div>
              </Grid>

            </Grid>
          </Box>
          <Box className={ classes.chatInput }>
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { set_input_div(el) }}></div>
            {/* <Avatar>X</Avatar> */}
            <Box boxShadow={0} borderRadius={10} className={ classes.chatTextFieldBox }>
              {/* <input type="text" className={ classes.chatTextField }/> */}
              <TextareaAutosize aria-label="empty textarea" placeholder="メッセージを送信" className={ classes.chatTextField } />
            </Box>
            <Box className={ classes.sendIconBox }>
              <SendIcon color="primary" className={ classes.center } onClick={() => {console.log("send!")} }/>
            </Box>
          </Box>
        </Container>
    )
}

export default Chat
