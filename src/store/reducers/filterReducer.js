import {
    UPDATE_FILTERS,
    REMOVE_FILTERS
} from '../actions/types'
import _ from 'lodash';

const defaultState = {
    pageSize: 100,
    country: "in",
    language: "en"
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case UPDATE_FILTERS:
            return { ...state, ...action.payload };
        case REMOVE_FILTERS:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}