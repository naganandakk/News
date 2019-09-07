import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import api from '../../apis/weather';

const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: theme.spacing(1),
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "#D3D3D3"
    },
    title: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        marginBottom: theme.spacing(0.8),
        paddingBottom: theme.spacing(1)
    },
    spacing: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        marginBottom: theme.spacing(1)
    }
}));

export default function Weather(props) {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState([]);

    async function loadWeatherData() {
        const response = await api.get('/daily');

        console.log(response.data);
    }

    useEffect(() => {
        loadWeatherData();
    }, []);

    return (
        <React.Fragment>
            <h2 className={classes.spacing}>&nbsp;</h2>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <h3 className={classes.title}>Bengaluru</h3>
                    <Divider />
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
