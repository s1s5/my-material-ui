import * as React from 'react'

import { makeStyles } from '@material-ui/styles';
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
    }
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
            <Hidden xsDown> {/* md以下の時に隠す */}
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
            </Hidden>
          </Toolbar>
        </AppBar>
    )
}

const Sidebar = (props:any) => {
    return (
        <Drawer
            open={props.open}
            onClose={props.onClose}
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
    const [sidebar_open, set_sidebar_open] = React.useState(false)
    const toggle_sidebar = () => {
        set_sidebar_open(!sidebar_open)
    }
    return (
        <div>
          <TopBar onMenuClick={ toggle_sidebar } />
          <Sidebar open={sidebar_open} onClose={ toggle_sidebar }/>
        </div>
    )
}

export default Dashboard
