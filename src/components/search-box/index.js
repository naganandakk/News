import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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
    },
    arrowDropdownIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 7),
        transition: theme.transitions.create('width'),
        width: theme.spacing(75),
        height: theme.spacing(4),
        fontFamily: 'Google Sans',
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },
    }
}));

export default function SearchBox(props) {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const submitSearch = () => {
        window.location = `#/search?q=${value}`;
    }

    const handleKeyPress = (event) => {
        if (event.which === 13) {
            submitSearch();
        }
    }

    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
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
    );
}