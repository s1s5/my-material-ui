import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, CardContent, CardActions, CardActionArea, CardMedia, Button, Grid, GridList, GridListTile, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
//        maxWidth: 345,
    },
    media: {
        height: 140,
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
                    <Grid item>
                      <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography>
                        hello world<br/>
                        hello world<br/>
                        hello world<br/>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <div style={{flexGrow: 1}}></div>
                  <Button size="small" color="secondary">Learn More >></Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.root}>
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
          </Grid>
        </Container>
    )
}

export default CardList
