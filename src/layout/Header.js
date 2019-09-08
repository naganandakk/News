import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
        fontWeight: 600
    },
}));

export default function (props) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Hidden mdUp implementation="css">
                    <IconButton onClick={props.onMobileMenuToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Hidden smDown implementation="css">
                    <IconButton onClick={props.onDesktopMenuToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <h3 className={classes.title}>
                    Daily News
                </h3>
            </Toolbar>
        </AppBar>
    );
}
