import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        flexGrow: 1,
    },
    card: {
        borderRadius: theme.spacing(1),
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "#D3D3D3"
    },
    mediaContainer: {
        padding: theme.spacing(1),
    },
    media: {
        maxHeight: 200,
        borderRadius: theme.spacing(1)
    },
    title: {
        padding: theme.spacing(0),
        marginBottom: theme.spacing(0.5)
    },
    source: {
        color: 'grey',
        fontSize: "0.9rem"
    }
}));

export default function (props) {
    const { article } = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={10}>
                    <CardContent>
                        <h3 className={classes.title}>{article.title}</h3>
                        <span className={classes.source}>
                            {article.source.name} - {moment.utc(article.publishedAt).fromNow()}
                        </span>
                        <p>{article.description}</p>
                    </CardContent>
                </Grid>
                <Grid item xs={2} className={classes.mediaContainer}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image={article.urlToImage}
                        title={article.title}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}
