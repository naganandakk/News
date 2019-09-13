import React, { useState, useEffect, useRef  } from 'react';
import { withRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';
import queryString from 'query-string';

import Form from './Form';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%'
    },
    searchMobile: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%'
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
    arrowBackIcon: {
        width: theme.spacing(4),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFFFFF"
    },
    searchIconMobile: {
        height: '100%',
        right: theme.spacing(2),
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFFFFF"
    },
    closeIcon: {
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: theme.spacing(6),
        color: "#FFFFFF",
        [theme.breakpoints.only('xs')]: {
            right: theme.spacing(1)
        },
    },
    inputRoot: {
        color: 'inherit',
        width: 'auto',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(7),
            marginRight: theme.spacing(11),
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(11)
        },
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 1),
        transition: theme.transitions.create('width'),
        height: theme.spacing(4)
    },
    inputRootMobile: {
        color: 'inherit',
        width: 'auto',
        marginLeft: theme.spacing(5)
    },
    inputInputMobile: {
        padding: theme.spacing(1, 6, 1, 1),
        transition: theme.transitions.create('width'),
        height: theme.spacing(4)
    },
    arrowDropdownIcon: {
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: theme.spacing(1),
        color: "#FFFFFF"
    }
}));

const Search = (props) => {
    const searchBoxRef = useRef(null);
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [showClearSearchIcon, setShowClearSearchIcon] = useState(false);
    const [showMobileSearchInput, setShowMobileSearchInput] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const submitSearch = (qString) => {
        setAnchorEl(null);
        props.onMobileSearchBoxToggle(false);
        setShowMobileSearchInput(false);
        if (qString) {
            window.location = `#/search?${qString}`;
        } else if (value.trim()) {
            const term = value.replace(/{domains:([^}]+)}/, '');

            window.location = `#/search?q=${term.trim()}`;
        }
    }

    const clearSearch = () => setValue('')

    const handleKeyPress = (event) => {
        if (event.which === 13) {
            submitSearch();
            event.target.blur();
        }
    }

    const handleOnChange = (event) => setValue(event.target.value)

    const renderSearchIcon = (className, onClickHandler) => {
        return (
            <IconButton onClick={() => onClickHandler()} className={className}>
                <SearchIcon />
            </IconButton>
        )
    }

    const renderArrowLeftIcon = () => {
        return(
            <IconButton
                className={classes.arrowBackIcon}
                onClick={() => {
                    setShowMobileSearchInput(false)
                    props.onMobileSearchBoxToggle(false)
                }}
            >
                <ArrowBackIcon />
            </IconButton>
        )
    }

    const renderClearSearchIcon = () => {
        if (!showClearSearchIcon) {
            return null;
        }

        return (
            <IconButton onClick={clearSearch} className={classes.closeIcon}>
                <CloseIcon />
            </IconButton>
        );
    }

    const renderSearchFormToggler = () => {
        return (
            <IconButton
                aria-controls="search-form-menu"
                aria-haspopup="true"
                className={classes.arrowDropdownIcon}
                onClick={() => setAnchorEl(searchBoxRef.current)}
            >
                {Boolean(anchorEl) ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
        )
    }

    const renderSearchFormMenu = () => {
        return (
            <Menu
                id="search-form-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                keepMounted
                elevation={0}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={() => { setAnchorEl(null) }}
            >
                <Form
                    queryString={props.location.search}
                    onSubmit={submitSearch}
                />
            </Menu>
        )
    }

    const renderDesktopSearchInput = () => {
        return (
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
        )
    }

    const renderMobileSearchInput = (show) => {
        if (!show) {
            return null;
        }

        return (
            <InputBase
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
                value={value}
                placeholder="Search"
                classes={{
                    root: classes.inputRootMobile,
                    input: classes.inputInputMobile,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        )
    }

    const renderDesktopSearchBox = () => {
        return (
            <div ref={searchBoxRef} className={classes.search}>
                {renderSearchIcon(classes.searchIcon, () => { submitSearch() })}
                {renderClearSearchIcon()}
                {renderSearchFormToggler()}
                {renderDesktopSearchInput()}
                {renderSearchFormMenu()}
            </div>
        )
    }

    const renderMobileSearchBox = () => {
        return (
            <React.Fragment>
                {
                    showMobileSearchInput
                    ?   <div className={classes.searchMobile}>
                            {renderArrowLeftIcon()}
                            {renderClearSearchIcon()}
                            {renderMobileSearchInput(showMobileSearchInput)}
                        </div>
                    :   null
                }
                {
                    !showMobileSearchInput
                    ?   renderSearchIcon(classes.searchIconMobile, () => {
                        setShowMobileSearchInput(true);
                        props.onMobileSearchBoxToggle(true);
                    })
                    :   null
                }
            </React.Fragment>
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
        const queryParams = queryString.parse(props.location.search);
        let searchTerm = queryParams.q || '';
        const domains = queryParams.domains;
        const language = queryParams.language;

        if (domains && domains.trim()) {
            searchTerm += ` {domains:${domains.trim()}}`;
        }

        if (language && language.trim()) {
            searchTerm += ` {language:${language.trim()}}`;
        }

        setValue(searchTerm);
    }, [props.location.search])

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

export default withRouter(Search);