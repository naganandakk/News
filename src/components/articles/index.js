import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Article from './Article';

const useStyles = makeStyles(theme => ({
    article: {
        marginBottom: theme.spacing(2)
    },
    title: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        marginBottom: theme.spacing(1)
    }
}));

export default function(props) {
    const classes = useStyles();

    const articleList = props.articles.map((article, idx) => {
        return(
            <div className={classes.article} key={idx} >
                <Article className={classes.article} article={article} />
            </div>
        );
    });

    return(
        <React.Fragment>
            <h2 className={classes.title}>{props.title}</h2>
            {articleList}
        </React.Fragment>
    )
}