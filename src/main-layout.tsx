import * as React from 'react'

import clsx from 'clsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Theme, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';

import TopBar from './top-bar'
import SideBar from './side-bar'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingTop: 56,
        height: 'calc(100% - 56px)',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64,
            height: 'calc(100% - 64px)',
        },
        backgroundColor: theme.palette.background.default,
        overflow: 'auto',
    },
    shiftContent: {
        paddingLeft: 240
    },
    content: {
        height: 'calc(100% - ' + theme.spacing(1) + ')',
        paddingTop: theme.spacing(1),
    }
}))

type Props = {
    children: React.ReactNode,
}

const MainLayout = (props: Props) => {
    const theme = useTheme() as Theme;
    const is_desktop = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true
    });

    const [sidebar_open, set_sidebar_open] = React.useState(false)
    const toggle_sidebar = () => {
        set_sidebar_open(!sidebar_open)
    }

    const should_open_sidebar = is_desktop ? true : sidebar_open

    const pages = [
        {
            title: 'カードリスト',
            href: '/cardlist/',
            icon: <DashboardIcon />,
        },
        {
            title: 'タブ',
            href: '/tab/',
            icon: <DashboardIcon />,
        },
        {
            title: 'ステッパー',
            href: '/stepper/',
            icon: <DashboardIcon />,
        },
        {
            title: 'ダイアログ',
            href: '/dialog/',
            icon: <DashboardIcon />,
        },
        {
            title: 'カレンダー',
            href: '/calendar/',
            icon: <DashboardIcon />,
        },
    ]
    const classes = useStyles();

    return (<div
                className={clsx({
                        [classes.root]: true,
                        [classes.shiftContent]: is_desktop
                })}
            >
      <TopBar onMenuClick={ toggle_sidebar }/>
      <SideBar open={ should_open_sidebar } onClose={ toggle_sidebar }
               variant={is_desktop ? 'persistent' : 'temporary'}
               pages={ pages }
      />
      <main className={classes.content}>
        { props.children }
      </main>
    </div>
    )
}

export default MainLayout
