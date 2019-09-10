import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '../../components/modal';
import Articles from '../../components/articles';
import api from '../../apis/articles';

export default function(props) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        return <Articles title="Headlines" articles={articles}/>
    }

    return(
        <React.Fragment>
            <Modal open={isLoading}>
                <LinearProgress color="secondary" />
            </Modal>
            {renderArticles()}
        </React.Fragment>
    )
}