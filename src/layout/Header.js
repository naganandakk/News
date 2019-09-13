import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import Search from '../components/search';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 0.2,
        fontWeight: 600,
        [theme.breakpoints.down('xs')]: {
            flexGrow: 1
        }
    },
}));

export default function (props) {
    const classes = useStyles();
    const [mobileSearch, setMobileSearch] = useState(false);

    const renderTitle = () => {
        if (mobileSearch) {
            return null;
        }

        return(
            <h3 className={classes.title}>
                Daily News
            </h3>
        )
    }

    const renderMobileMenuToggle = () => {
        if (mobileSearch) {
            return null;
        }

        return(
            <Hidden mdUp implementation="css">
                <IconButton onClick={props.onMobileMenuToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Hidden>
        )
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Hidden smDown implementation="css">
                    <IconButton onClick={props.onDesktopMenuToggle} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                {renderMobileMenuToggle()}
                {renderTitle()}
                <Search onMobileSearchBoxToggle={setMobileSearch}/>
            </Toolbar>
        </AppBar>
    );
}
