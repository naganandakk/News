import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import { signIn, signOut } from '../store/actions';
const useStyles = makeStyles(theme => ({
    signinButton: {
        background: "#1a73e8",
        color: "#FFFFFF",
        border: "1px solid transparent",
        textTransform: "none",
        margin: theme.spacing(1),
    }
}));

const GoogleAuthComponent = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMenuClose() {
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => {
                props.onSignOutCick();
                handleMenuClose();
            }}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    if (!props.auth.isSignedIn) {
        return (
            <React.Fragment>
                <Button onClick={props.onSignInClick} variant="contained" className={classes.signinButton}>
                    Sign in
                </Button>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Fab size="small" onClick={handleProfileMenuOpen} color="primary" aria-label="profile" className={classes.fab}>
                N
            </Fab>
            {renderMobileMenu}
            {renderMenu}
        </React.Fragment>
    );
};

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '35374257999-5rgpsbk5v9undl020mf9p1ulme1ulh3h.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn({
                userId: this.auth.currentUser.get().getId()
            })
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutCick = () => {
        this.auth.signOut();
    }

    render() {
        return (
            <GoogleAuthComponent
                onSignInClick={this.onSignInClick}
                onSignOutCick={this.onSignOutCick}
                onAuthChange={this.onAuthChange}
                auth={this.props.auth}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(
    mapStateToProps,
    {
        signIn, signOut
    }
)(GoogleAuth)
