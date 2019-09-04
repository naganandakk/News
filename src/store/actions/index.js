import {
    SIGN_IN, SIGN_OUT,
    FETCH_ARTICLES,
    UPDATE_FILTERS,
    REMOVE_FILTERS,
    FETCH_SOURCES,
    UPDATE_UI_STATE
} from './types';
import articles from '../../apis/articles';

export const updateUiState = (uiState = {}) => {
    return {
        type: UPDATE_UI_STATE,
        payload: uiState
    }
};

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        payload: user
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchArticles = (resourceID, params = {}) => async dispatch => {
    const queryParams = Object.keys(params).map(key => key + '=' + params[key]).join('&');

    dispatch(updateUiState({
        pageLoader: true
    }));

    const response = await articles.get(`${resourceID}?${queryParams}`);

    dispatch({
        type: FETCH_ARTICLES,
        payload: response.data.articles
    });


    dispatch(updateUiState({
        pageLoader: false
    }));
};


export const fetchSources = () => async dispatch => {
    const response = await articles.get('/sources');

    dispatch({
        type: FETCH_SOURCES,
        payload: response.data.sources
    });
};

export const updateFilters = (filters = {}) => {
    return {
        type: UPDATE_FILTERS,
        payload: filters
    }
};

export const removeFilters = (filters = []) => {
    return {
        type: REMOVE_FILTERS,
        payload: filters
    }
};