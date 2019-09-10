import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '../../components/modal';
import SectionsTab from '../../components/topics/SectionsTab';
import Articles from '../../components/articles';
import api from '../../apis/articles';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '1.8rem',
        textTransform: 'capitalize',
        margin: theme.spacing(0),
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.125rem',
            paddingLeft: theme.spacing(1),
            fontWeight: 600
        }
    },
    loader: {
        textAlign: "center"
    }
}));

export default function Topics(props) {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);
    const [isTopicLoading, setIsTopicLoading] = useState(false);
    const [isSectionLoading, setIsSectionLoading] = useState(false);
    const { topicID, sectionID } = props.match.params;
    const tabs = {
        'business': ['Latest', 'Economy', 'Markets', 'Jobs', 'Personal finance', 'Entrepreneurship'],
        'technology': ['Latest', 'Mobile', 'Gadgets', 'Internet', 'Virtual Reality', 'Artificial Intelligence', 'Computing'],
        'entertainment': ['Latest', 'Movies', 'Music', 'Tv', 'Books', 'Art', 'Celebrities'],
        'sports': ['Latest', 'Cricket', 'Hockey', 'Tennis', 'Football', 'Badminton', 'Kabbadi', 'Women\'s Cricket', 'Basketball', 'F1 Racing'],
        'science': ['Latest', 'Environment', 'Outer space', 'Physics', 'Genetics', 'Wildlife'],
        'health': ['Latest', 'Medicine', 'Healthcare', 'Mental health', 'Nutrition', 'Fitness']
    };
    const arrayIndex = tabs[topicID].map(section => section.toLowerCase()).indexOf(sectionID);
    const selectedTabIndex = arrayIndex !== -1 ? arrayIndex : 0;

    const renderTitle = () => {
        return(
            <h2 className={classes.title}>{topicID}</h2>
        )
    }

    const loadSection = async (section) => {
        setIsSectionLoading(true);

        const response = await api.get('/top-headlines', {
            params: {
                category: topicID,
                q: section !== 'latest' ? section : undefined
            }
        });

        setIsSectionLoading(false);

        setArticles(response.data.articles);
    }

    useEffect(() => {
        const loadTopics = async () => {
            setIsTopicLoading(true);
    
            const response = await api.get('/top-headlines', {
                params: {
                    category: topicID
                }
            });
    
            setIsTopicLoading(false);
    
            setArticles(response.data.articles);
        };

        loadTopics();

    }, [topicID]);

    const onSectionChange = (sectionIndex) => {
        const section = tabs[topicID][sectionIndex].toLowerCase();

        window.location.hash = `topics/${topicID}/sections/${section}`;

        loadSection(section);
    }

    return(
        <React.Fragment>
            <Modal open={isTopicLoading}>
                <LinearProgress color="secondary" />
            </Modal>
            {renderTitle()}
            <SectionsTab
                tabs={tabs[props.match.params.topicID]}
                selectedTabIndex={selectedTabIndex}
                onSectionChange={onSectionChange}
            />
            {
                isSectionLoading
                ?   <div className={classes.loader}><CircularProgress color="secondary" /></div>
                :   isTopicLoading
                    ? null
                    : <Articles articles={articles}/>
            }
        </React.Fragment>
    )
}