import {
    FETCH_SOURCES,
} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_SOURCES:
            return action.payload;
        default:
            return state;
    }
}