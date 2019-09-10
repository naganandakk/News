import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '../../components/modal';
import Articles from '../../components/articles';
import api from '../../apis/articles';

const useStyles = makeStyles(theme => ({
    title: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.125rem',
            fontWeight: 600,
            paddingLeft: theme.spacing(1)
        }
    }
}));

export default function(props) {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function loadArticles() {
        setIsLoading(true);

        const response = await api.get('/top-headlines');

        setIsLoading(false);

        setArticles(response.data.articles);
    }

    useEffect(() => {
        loadArticles();
    }, []);

    const renderArticles = () => {
        if (isLoading) {
            return null;
        }

        return <Articles articles={articles}/>
    }

    return(
        <React.Fragment>
            <Modal open={isLoading}>
                <LinearProgress color="secondary" />
            </Modal>
            <h2 className={classes.title}>Headlines</h2>
            {renderArticles()}
        </React.Fragment>
    )
}