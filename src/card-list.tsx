import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, CardContent, CardActions, CardActionArea, CardMedia, Button, Grid, GridList, GridListTile, Avatar, Typography, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider, Theme, Box } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
//        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    testCardContent: {
        padding: 16,
        '&:last-child': {
            paddingBottom: 16,
        },
    },
    center: {
        flex: "0 1 auto",
        margin: "auto",
        // backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    },
}))

const CardList = () => {
    const classes = useStyles()

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
        { icon: <FavoriteIcon />, name: 'Like' },
    ];

    const [open, set_open] = React.useState(false);

    return (
        <Container>
          <Grid container spacing={ 1 }>
            <Grid item xs={12}>
              <Card elevation={3}>
                <CardContent>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item style={{display: "flex"}}>
                      <Avatar className={classes.center} >W</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>
                          hello world<br/>
                          hello world<br/>
                          hello world
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider/>
                <CardActions>
                  <div style={{flexGrow: 1}}></div>
                  <Button size="small" color="secondary">Learn More >></Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>

                <CardActionArea>
                  <Box m={1} style={{float: "right" }}>
                    <FavoriteBorderIcon style={ {color: "white"} }/>
                  </Box>
                  <CardMedia
                      className={classes.media}
                      image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent className={ classes.testCardContent }>
                  <List>
                    <ListItem button> {/* 押せるようにするにはbutton */}
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <BeachAccessIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
          
          <SpeedDial
              ariaLabel="SpeedDial example"
              className={classes.speedDial}
              icon={<SpeedDialIcon />}
              onClose={ () => { set_open(false) } }
              onOpen={ () => { set_open(true) } }
              open={open}
              direction={ 'up' }
          >
            {actions.map(action => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={ () => { set_open(false) } }
                />
            ))}
          </SpeedDial>
        </Container>
    )
}

export default CardList
