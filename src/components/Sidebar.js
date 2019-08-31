import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const listItemGroup = [
    [
        { title: 'Top stories', icon: <ViewHeadline /> },
        { title: 'For you', icon: <PersonIcon /> },
        { title: 'Favourites', icon: <GradeIcon /> },
        { title: 'Saved searches', icon: <SearchIcon /> }
    ],
    [
        { title: 'India', icon: <FlagIcon /> },
        { title: 'World', icon: <PublicIcon /> },
        { title: 'Local stories ', icon: <RoomIcon /> },
        { title: 'Business', icon: <BusinessIcon /> },
        { title: 'Technology', icon: <AndroidIcon /> },
        { title: 'Entertainment', icon: <LocalMovieIcon /> },
        { title: 'Sports ', icon: <InboxIcon /> },
        { title: 'Science', icon: <InboxIcon /> },
        { title: 'Health', icon: <InboxIcon /> }
    ]
];

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
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
  );
}
