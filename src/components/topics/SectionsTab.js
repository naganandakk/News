import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    tabsContainer: {
        borderBottom: '1px solid',
        borderBottomWidth: 'thin',
        borderBottomColor: '#D3D3D3',
        marginBottom: theme.spacing(3)
    },
    tabs: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
    },
    tab: {
        textTransform: 'none',
        fontFamily: 'Google Sans',
        fontSize: '1.2rem',
        fontWeight: 500,
        margin: theme.spacing(0),
        padding: theme.spacing(2),
        '&:hover': {
            color: "#000000"
        },
        width: 'fit-content',
        minWidth: theme.spacing(0),
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    }
}));

export default function SectionsTab(props) {
    const classes = useStyles();
    const [value, setValue] = useState(props.selectedTabIndex || 0);
    const tabList = props.tabs.map((name, idx) => {
        return <Tab key={name} className={classes.tab} label={name} {...a11yProps(idx)} />
    });

    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }

    function handleChange(event, newValue) {
        setValue(newValue);
        props.onSectionChange(newValue);
    }

    return (
        <div className={classes.tabsContainer}>
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {tabList}
            </Tabs>
        </div>
    );
}