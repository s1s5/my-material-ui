import * as React from 'react'

import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Theme } from '@material-ui/core';
import { List, ListItem, Button, colors } from '@material-ui/core';
import { Popover } from '@material-ui/core';
import { Divider, Drawer } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none',
    },
    flexGrow: {
        flexGrow: 1,
    },
    signOutButton: {
        marginLeft: theme.spacing(1),  // なんでか上の方の型定義を入れないとエラーになる
    },
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)'
        }
    },
}));

const TopBar = (props:any) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
    
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AppBar>
          <Toolbar>
            <Hidden lgUp> {/* lg以上の時に隠す */}
              <IconButton
                  color="inherit"
                  onClick={ () => { props.onMenuClick(); }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <h5>hello</h5>
            <div className={classes.flexGrow} />
            <div>
              <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
                <Badge
                    badgeContent={ 4 }
                    color="error"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Popover 
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                  }}
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
              >
                The content of the Popover.
              </Popover>

              <IconButton
                  color="inherit"
              >
                <InputIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
    )
}

const Sidebar = (props:any) => {
    const classes = useStyles();
    return (
        <Drawer
            open={props.open}
            classes={{ paper: classes.drawer }}
            onClose={props.onClose}
            variant={props.variant}
        >
          <List>
            <ListItem>
              <Button>menu 0</Button>
            </ListItem>
            <ListItem>
              <Button>menu 1</Button>
            </ListItem>
            <ListItem>
              <Button>menu 2</Button>
            </ListItem>
          </List>
        </Drawer>
    )
}

const Dashboard = () => {
  const theme = useTheme() as Theme;
    const is_desktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });

    const [sidebar_open, set_sidebar_open] = React.useState(false)
    const toggle_sidebar = () => {
        set_sidebar_open(!sidebar_open)
    }

    const should_open_sidebar = is_desktop ? true : sidebar_open

    return (
        <div>
          <TopBar onMenuClick={ toggle_sidebar } />
          <Sidebar open={should_open_sidebar} onClose={ toggle_sidebar }
                   variant={is_desktop ? 'persistent' : 'temporary'} />
        </div>
    )
}

export default Dashboard
