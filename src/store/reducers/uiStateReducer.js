import {
    UPDATE_UI_STATE,
} from '../actions/types';

const defaultState = {
    sidebarMobile: false,
    sidebarDesktop: true,
    pageLoader: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case UPDATE_UI_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}