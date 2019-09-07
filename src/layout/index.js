import React, { useState } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';
import Weather from '../components/weather';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: theme.spacing(8),
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -240,
    },
    contentShift: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0
    },
    gridContainer: {
        flexGrow: 1,
    }
}));

export default function (props) {
    const classes = useStyles();
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

    function onMobileMenuToggle() {
        setMobileSidebarOpen(!mobileSidebarOpen);
    }

    function onDesktopMenuToggle() {
        setDesktopSidebarOpen(!desktopSidebarOpen);
    }

    return (
        <div className={classes.root}>
            <Header
                onMobileMenuToggle={onMobileMenuToggle}
                onDesktopMenuToggle={onDesktopMenuToggle}
            />
            <Sidebar
                openMobile={mobileSidebarOpen}
                openDesktop={desktopSidebarOpen}
                onMobileMenuToggle={onMobileMenuToggle}
                onDesktopMenuToggle={onDesktopMenuToggle}
            />
            <Container className={clsx(classes.content, {
                [classes.contentShift]: desktopSidebarOpen,
            })}>
                <Grid container className={classes.gridContainer} spacing={2}>
                    <Grid item xs={12} sm={8}>
                        {props.children}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Weather />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};