import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography, Hidden, IconButton, Theme } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InputIcon from '@material-ui/icons/Input'

import Notifications from './notifications'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none',
//        color: '#444',
        //        backgroundColor: 'white',
    },
    titleLink: {
        textDecoration: "none",
        flexGrow: 1,
    },
    title: {
        color: theme.palette.primary.contrastText,
//        color: '#444',
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    },
    menuSpace: {
        marginLeft: theme.spacing(2),
    }
}))

type Props = {
    className?: string,
    onMenuClick: () => void,
}

const TopBar = (props: Props) => {
    const { className, onMenuClick } = props
    const classes = useStyles()
    /* className={clsx(classes.root, className)}    */
    return (
        <AppBar className={ classes.root }>
          <Toolbar disableGutters>
            <Hidden lgUp>
              <IconButton
                  color="inherit"
                  onClick={ onMenuClick }
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            
            <Hidden mdDown>
              <div className={ classes.menuSpace }></div>
            </Hidden>
            
            <RouterLink to="/" className={classes.titleLink}>
              <Typography variant="h6" className={classes.title}>
                My First App
              </Typography>
            </RouterLink>
            
            <div>
              <Notifications />
              <IconButton
                  className={classes.signOutButton}
                  color="inherit"
              >
                <InputIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
    )
}

export default TopBar
