import * as React from 'react'

import { NavLink as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import { List, ListItem, Button, colors, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)'
        }
    },
    root: {
        backgroundColor: theme.palette.primary.contrastText,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2)
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    nav: {
        marginBottom: theme.spacing(2)
    },
    list: {
        marginBottom: theme.spacing(2)
    },
    listItem: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        // color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    },
}))

type Page = {
    title: string,
    href: string,
    icon: React.ReactNode,
}

type Props = {
    open: boolean,
    onClose: () => void,
    variant: "permanent" | "persistent" | "temporary" | undefined,
    pages: Page[],
}

// TODO: うまくいかないので"https://material-ui.com/guides/composition/#button"を見直す
const CustomRouterLink = React.forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => (
    <div ref={ref}
         style={{ flexGrow: 1 }} >
      <RouterLink {...props}/>
    </div>
));


const SideBar = (props: Props) => {
    const classes = useStyles();
    // transitionDuration={ 0.5 }
    return (
        <Drawer
            anchor="left"
            open={ props.open }
            classes={{ paper: classes.drawer }}
            onClose={ props.onClose }
            onClick={ props.onClose }
            variant={ props.variant }
        >
          <div className={ classes.root }>
            <List className={ classes.list }>
              { props.pages.map(page => (
                  <ListItem
                      className={classes.listItem}
                      disableGutters
                      key={page.title}
                      >
                    {/* activeClassName={classes.active} */}
                    <Button
                        className={classes.button}
                        component={CustomRouterLink}
                        to={page.href}
                        >
                      {/* <Button
                              style={{ flexGrow: 1 }}
                              className={classes.button}
                              component={RouterLink}
                              to={page.href}> */}
                      <div className={classes.icon}>{page.icon}</div>
                      {page.title}
                    </Button>
                  </ListItem>
              ))
              }
            </List>
          </div>
        </Drawer>
    )    
}

export default SideBar
  
