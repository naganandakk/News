import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import SearchBar from './SearchBar';
import GoogleAuth from './GoogleAuth';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#FFFFFF"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Daily News
          </Typography>
          <SearchBar />
          <div className={classes.grow} />
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </div>
  );
}