import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '../../components/modal';
import Articles from '../../components/articles';
import api from '../../apis/articles';
import queryString from 'query-string';

const useStyles = makeStyles(theme => ({
    spacing: {
        marginBottom: theme.spacing(3)
    }
}));

export default function Search(props) {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadArticles = async () => {
            setIsLoading(true);
    
            // country param is not supported by everything endpoint
            // articles api appends country param by default
            // make country as undefined before calling everything endpoint
            const response = await api.get('/everything', {
                params: {
                    country: undefined,
                    language: "en",
                    ...queryString.parse(props.location.search)
                }
            });
    
            setIsLoading(false);
    
            setArticles(response.data.articles);
        }

        loadArticles();
    }, [props.location.search]);

    const renderArticles = () => {
        if (isLoading) {
            return null;
        }

        return <Articles articles={articles}/>;
    }

    return(
        <React.Fragment>
            <Modal open={isLoading}>
                <LinearProgress color="secondary" />
            </Modal>
            <div className={classes.spacing}></div>
            {renderArticles()}
        </React.Fragment>
    )
}