import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import PersonIcon from '@material-ui/icons/Person';
import GradeIcon from '@material-ui/icons/Grade';
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import PublicIcon from '@material-ui/icons/Public';
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';
import LocalMovieIcon from '@material-ui/icons/LocalMovies';
import AndroidIcon from '@material-ui/icons/Android';

import { updateUiState } from '../store/actions';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    transition: theme.transitions.create('dispaly', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerOpen: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: theme.mixins.toolbar,
}));

const listItemGroup = [
  [
    { title: 'Top stories', icon: <ViewHeadline />, link: "/top-stories" },
    { title: 'For you', icon: <PersonIcon />, link: "/top-stories" },
    { title: 'Favourites', icon: <GradeIcon />, link: "/top-stories" },
    { title: 'Saved searches', icon: <SearchIcon />, link: "/top-stories" }
  ],
  [
    { title: 'India', icon: <FlagIcon />, link: "/top-stories" },
    { title: 'World', icon: <PublicIcon />, link: "/top-stories" },
    { title: 'Local stories ', icon: <RoomIcon />, link: "/top-stories" },
    { title: 'Business', icon: <BusinessIcon />, link: "/top-stories" },
    { title: 'Technology', icon: <AndroidIcon />, link: "/topics/technology" },
    { title: 'Entertainment', icon: <LocalMovieIcon />, link: "/top-stories" },
    { title: 'Sports ', icon: <InboxIcon />, link: "/top-stories" },
    { title: 'Science', icon: <InboxIcon />, link: "/top-stories" },
    { title: 'Health', icon: <InboxIcon />, link: "/top-stories" }
  ]
];

const SidebarComponent = (props) => {
  const classes = useStyles();

  const renderDesktopDrawer = () => {
    if (!props.uiState.sidebarDesktop) {
        return null;
    }

    return (
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.uiState.sidebarDesktop,
      })}
        variant="permanent"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        {
          listItemGroup.map((items, idx) => (
            <List>
              {items.map((item, index) => (
                <ListItem button key={item.title}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          ))
        }
      </Drawer>
    )
  };

  const renderMobileDrawer = () => {
    return (
      <Drawer
        className={classes.drawer}
        variant="temporary"
        open={props.uiState.sidebarMobile}
        onClose={() => props.updateUiState({ sidebarMobile: false })}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        {
          listItemGroup.map((items, idx) => (
            <List>
              {items.map((item, index) => (
                <ListItem button key={item.title}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          ))
        }
      </Drawer>
    )
  };

  return (
    <nav className={classes.drawer} aria-label="topics categories">
      <Hidden xsDown implementation="css">
        {renderDesktopDrawer()}
      </Hidden>
      <Hidden smUp implementation="css">
        {renderMobileDrawer()}
      </Hidden>
    </nav>
  );
}


class Sidebar extends React.Component {

  render() {
    return (
      <SidebarComponent
        uiState={this.props.uiState}
        updateUiState={this.props.updateUiState}
      />
    )
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
)(Sidebar)
