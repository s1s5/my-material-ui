import * as React from 'react'

import {
    Container, Paper, Grid, Divider,
    Button, Backdrop, CircularProgress,
    Snackbar, IconButton,
    Modal, Box,
    Collapse,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close'
import Alert from '@material-ui/lab/Alert';


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

    alert: {
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1,
        right: "0px",
        bottom: "0px",
        top: "0px",
        left: "0px",
        width: "100%",
    }
    
}))


const MyDialog = () => {
    const classes = useStyles()
    const [backdrop_open, set_backdrop_open] = React.useState(false)
    const [snackbar_open, set_snackbar_open] = React.useState(false)
    const [modal_open, set_modal_open] = React.useState(false)
    const [alert_open, set_alert_open] = React.useState(false)

    const handle_snackbar_close = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {  // snackbar以外を押した時の反応？よくわからん
            return;
        }

        set_snackbar_open(false);
    };
    
    return (
        <Container>
          <Paper>
            <Grid container spacing={ 1 }>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={() => { set_backdrop_open(!backdrop_open) } }>
                  Show backdrop
                </Button>
                <Backdrop className={classes.backdrop} open={backdrop_open} onClick={ () => { set_backdrop_open(false) } }>
                  <CircularProgress color="inherit" />
                </Backdrop>
              </Grid>
              
              <Grid item xs={12}>
                <Button onClick={() => { set_snackbar_open(true) } }>Open simple snackbar</Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={snackbar_open}
                    autoHideDuration={6000}
                    onClose={handle_snackbar_close}
                    message="Note archived"
                    action={
                        <React.Fragment>
                          <Button color="secondary" size="small" onClick={handle_snackbar_close}>
                            UNDO
                          </Button>
                          <IconButton size="small" aria-label="close" color="inherit" onClick={handle_snackbar_close}>
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </React.Fragment>
                    }
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={() => { set_modal_open(true) }}>
                  Open Modal
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={modal_open}
                    onClose={() => {set_modal_open(false)} }
                >
                  <Container maxWidth="xs" style={{ height: "100%", display: "flex"}}>
                    <Paper elevation={4} style={{ flex: "0 1 auto", margin: "auto", }}>
                      <Box padding={2}>
                        <h2 id="simple-modal-title">Text in a modal</h2>
                        <p id="simple-modal-description">
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                        <Button variant="outlined" onClick={ () => { set_modal_open(false) } }>close</Button>
                      </Box>
                    </Paper>
                  </Container>

                </Modal>
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={() => { set_alert_open(true) }}>
                  Open Alert
                </Button>
                <Collapse className={ classes.alert } in={alert_open}>
                  <Alert severity="error" onClose={() => { set_alert_open(false) }}>This is an error alert — check it out!</Alert>
                </Collapse>
              </Grid>

            </Grid>
          </Paper>
        </Container>
    )
}

export default MyDialog
