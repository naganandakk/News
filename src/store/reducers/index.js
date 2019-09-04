import { combineReducers } from 'redux';

import authReducer from './authReducer';
import articleReducer from './articleReducer';
import filterReducer from './filterReducer';
import sourceReducer from './sourceReducer';
import uiStateReducer from './uiStateReducer';

export default combineReducers({
    auth: authReducer,
    articles: articleReducer,
    filters: filterReducer,
    sources: sourceReducer,
    uiState: uiStateReducer
})