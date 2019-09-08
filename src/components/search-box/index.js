import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';
import queryString from 'query-string';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFFFFF"
    },
    arrowDropdownIcon: {
        height: '100%',
        position: 'absolute',
        // pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: theme.spacing(1),
        color: "#FFFFFF"
    },
    closeIcon: {
        height: '100%',
        position: 'absolute',
        // pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: theme.spacing(6),
        color: "#FFFFFF"
    },
    inputRoot: {
        color: 'inherit',
        
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(7),
            marginRight: theme.spacing(11),
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(11)
        },
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 1),
        transition: theme.transitions.create('width'),
        width: theme.spacing(75),
        height: theme.spacing(4),
        fontFamily: 'Google Sans',
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(30),
            padding: theme.spacing(1, 10, 1, 7)
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    }
}));

const SearchBox = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [showClearSearchIcon, setShowClearSearchIcon] = useState(false);
    const queryParams = queryString.parse(props.location.search);
    const searchTerm = queryParams.q || '';

    const submitSearch = () => {
        window.location = `#/search?q=${value}`;
    }

    const handleKeyPress = (event) => {
        if (event.which === 13) {
            submitSearch();
            event.target.blur();
        }
    }

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    const renderDesktopSearchBox = () => {
        return (
            <div className={classes.search}>
                <IconButton className={classes.searchIcon}>
                    <SearchIcon />
                </IconButton>
                {
                    showClearSearchIcon
                    ?   <IconButton className={classes.closeIcon}>
                            <CloseIcon />
                        </IconButton>
                    : null
                }
                <IconButton className={classes.arrowDropdownIcon}>
                    <ArrowDropDownIcon />
                </IconButton>
                <InputBase
                    onChange={handleOnChange}
                    onKeyPress={handleKeyPress}
                    value={value}
                    placeholder="Search for topics, locations & sources"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        )
    }

    const renderMobileSearchBox = () => {
        return (
            <div className={classes.search}>
                <IconButton className={classes.searchIcon}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    onChange={handleOnChange}
                    onKeyPress={handleKeyPress}
                    value={value}
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        )
    }

    useEffect(() => {
        if (value) {
            setShowClearSearchIcon(true);
        } else {
            setShowClearSearchIcon(false);
        }
    }, [value]);

    useEffect(() => {
        setValue(searchTerm);
    }, [searchTerm])

    return (
        <React.Fragment>
            <Hidden xsDown implementation="css">
                {renderDesktopSearchBox()}
            </Hidden>
            <Hidden smUp implementation="css">
                {renderMobileSearchBox()}
            </Hidden>
        </React.Fragment>
    );
}

export default withRouter(SearchBox);