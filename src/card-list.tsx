import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, CardContent, CardActions, CardActionArea, CardMedia, Button, Grid, GridList, GridListTile, Avatar, Typography, Paper, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles({
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
})

const CardList = () => {
    const classes = useStyles()

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
        </Container>
    )
}

export default CardList
