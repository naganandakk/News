import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import BusinessIcon from '@material-ui/icons/Business';
import LocalMovieIcon from '@material-ui/icons/LocalMovies';
import MemoryIcon from '@material-ui/icons/Memory';
import ScienceIcon from '@material-ui/icons/SignalCellularConnectedNoInternet0Bar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderRight: theme.spacing(0)
    },
    drawerPaperShift: {
        width: 0,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    toolbar: theme.mixins.toolbar,
    listItem: {
        borderTopRightRadius: theme.spacing(3),
        borderBottomRightRadius: theme.spacing(3),
        '&:hover': {
            color:'#1a73e8',
            background: 'none'
        }
    },
    listItemSelected: {
        borderTopRightRadius: theme.spacing(3),
        borderBottomRightRadius: theme.spacing(3),
        background: "#E6EBFD",
        color:'#1a73e8',
        '&:hover': {
            color:'#1a73e8',
            background: '#E6EBFD'
        }
    },
    listItemIconSelected: {
        color: 'inherit'
    }
}));

const Sidebar = (props) => {
    const classes = useStyles();
    const pathname = props.location.pathname;
    const menuList = [
        [
            {
                key: 'top-stories', title: 'Top stories', icon: <FeaturedPlayListIcon/>,
                link: '/', selected: (pathname === '/' || pathname.includes('top-stories')) ? true : false }
        ],
        [
            {
                key: 'business', title: 'Business', icon: <BusinessIcon/>,
                link: '/topics/business', selected: pathname.includes('topics/business') ? true : false
            },
            {
                key: 'technology', title: 'Technology', icon: <MemoryIcon/>,
                link: '/topics/technology', selected: pathname.includes('topics/technology') ? true : false
            },
            {
                key: 'entertainment', title: 'Entertainment', icon: <LocalMovieIcon/>,
                link: '/topics/entertainment', selected: pathname.includes('topics/entertainment') ? true : false
            },
            {
                key: 'sports', title: 'Sports', icon: <DirectionsBikeIcon/>,
                link: '/topics/sports', selected: pathname.includes('topics/sports') ? true : false
            },
            {
                key: 'science', title: 'Science', icon: <ScienceIcon/>,
                link: '/topics/science', selected: pathname.includes('topics/science') ? true : false
            },
            {
                key: 'health', title: 'Health', icon: <FitnessCenterIcon/>,
                link: '/topics/health', selected: pathname.includes('topics/health') ? true : false
            }
        ]
    ];

    const renderMenuList = () => {
        const menuListLength = menuList.length;

        return menuList.map((menus, menusIdx) => {
            return (
                <React.Fragment key={`menu-list-${menusIdx}`}>
                    <List>
                        {
                            menus.map((menu) => {
                                return (
                                    <Link key={menu.title} to={menu.link} onClick={() => {
                                        if (props.openMobile) { props.onMobileMenuToggle(); }
                                    }}>
                                        <ListItem button key={menu.key} className={menu.selected ? classes.listItemSelected : classes.listItem}>
                                            <ListItemIcon className={menu.selected ? classes.listItemIconSelected : ''} >{menu.icon}</ListItemIcon>
                                            <span>{menu.title}</span>
                                        </ListItem>
                                    </Link>
                                )
                            })
                        }
                    </List>
                    { menuListLength - 1 !== menusIdx ? <Divider /> : null }
                </React.Fragment>
            )
        });
    };

    const renderMobileDrawer = () => {
        return (
            <Drawer
                variant="temporary"
                open={props.openMobile}
                onClose={props.onMobileMenuToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.toolbar} />
                {renderMenuList()}
            </Drawer>
        );
    };

    const renderDesktopDrawer = () => {
        return (
            <Drawer
                variant="permanent"
                open
                classes={{
                    paper: props.openDesktop ? classes.drawerPaper : classes.drawerPaperShift,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.toolbar} />
                {renderMenuList()}
            </Drawer>
        );
    };

    return (
        <nav className={classes.drawer} aria-label="top-stories categories">
            <Hidden mdUp implementation="css">
                {renderMobileDrawer()}
            </Hidden>
            <Hidden smDown implementation="css">
                {renderDesktopDrawer()}
            </Hidden>
        </nav>
    )
}

export default withRouter(Sidebar);