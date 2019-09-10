import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import IconButton from '@material-ui/core/IconButton';

import Form from './Form';

const useStyles = makeStyles(theme => ({
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

export default function DropDown(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(event) {
    if (props.target && props.target.current) {
      setAnchorEl(props.target.current);
    } else {
      setAnchorEl(event.currentTarget);
    }
  }

  const onSearchSubmit = (qString) => {
    props.onSearchSubmit(qString);

    handleClose();
  }

  return (
    <React.Fragment>
      <IconButton
        aria-controls="search-form-menu"
        aria-haspopup="true"
        className={classes.arrowDropdownIcon}
        onClick={handleClick}
      >
        { Boolean(anchorEl) ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
      </IconButton>
      <Menu
        id="search-form-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Form queryString={props.queryString} onSubmit={onSearchSubmit} />
      </Menu>
    </React.Fragment>
  );
}
