import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(1),
        borderRadius: "5px",
        marginBottom: "15px",
        border: "1px"
    }
}));

const NewsCard = (props) => {
    const classes = useStyles();
    const { article } = props;

    return (
        <Card className={classes.card}>
            <div>
                <CardContent>
                    <Typography component="h3">
                        {article.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {article.source.name} - {moment.utc(article.publishedAt).fromNow()}
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                image={article.urlToImage}
                title={article.title}
            />
        </Card>
    )
}

export default NewsCard;