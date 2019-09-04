import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import { updateUiState } from '../store/actions';

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

const HeaderComponent = (props) => {
  const classes = useStyles();

  const renderMobileDrawerToggleIcon = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={() => {
          props.updateUiState({
            sidebarMobile: !props.uiState.sidebarMobile,
            sidebarDesktop: false,
          })
        }}
      >
        <MenuIcon />
      </IconButton>
    );
  };

  const renderDesktopDrawerToggleIcon = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={() => {
          props.updateUiState({
            sidebarDesktop: !props.uiState.sidebarDesktop,
            sidebarMobile: false
          })
        }}
      >
        <MenuIcon />
      </IconButton>
    );
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Hidden xsDown implementation="css">
            {renderDesktopDrawerToggleIcon()}
          </Hidden>
          <Hidden smUp implementation="css">
            {renderMobileDrawerToggleIcon()}
          </Hidden>
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
};

class Header extends React.Component {

  render() {
    return (
      <HeaderComponent
        uiState={this.props.uiState}
        updateUiState={this.props.updateUiState}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uiState: state.uiState
  }
};

export default connect(
  mapStateToProps,
  {
    updateUiState
  }
)(Header);
