import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../../store/actions';

import NewsCard from './NewsCard';

class TopStories extends React.Component {

    componentDidMount() {
        this.props.fetchArticles('top-headlines', this.props.filters)
    }

    render() {
        const articleList = this.props.articles.map(article => {
            return(
                <NewsCard article={article} key={article.title} />
            )
        });

        return (
            <React.Fragment>
                <h2>Headlines</h2>
                {articleList}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        filters: state.filters
    }
};

export default connect(
    mapStateToProps,
    {
        fetchArticles
    }
)(TopStories);