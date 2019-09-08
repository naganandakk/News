import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

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
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1)
        }
    },
    articleContainer: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            margin: theme.spacing(0)
        }
    },
    media: {
        width: '100%',
        height: '100%',
        borderRadius: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            maxHeight: 80
        },
        [theme.breakpoints.up('sm')]: {
            maxHeight: 150
        }
    },
    title: {
        padding: theme.spacing(0),
        marginBottom: theme.spacing(0.5),
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    },
    source: {
        color: 'grey',
        fontSize: "0.9rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem'
        }
    },
    description: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

export default function (props) {
    const { article } = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={8} className={classes.articleContainer}>
                    <h3 className={classes.title}>{article.title}</h3>
                    <span className={classes.source}>
                        {article.source.name} - {moment.utc(article.publishedAt).fromNow()}
                    </span>
                    <p className={classes.description}>{article.description}</p>
                </Grid>
                <Grid item xs={4} className={classes.mediaContainer}>
                    <img className={classes.media} src={article.urlToImage} alt="" />
                </Grid>
            </Grid>
        </Card>
    );
}
