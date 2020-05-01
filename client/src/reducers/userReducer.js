import {
    ADD_USER,
    GET_USERS,
    SAVE_TO_USER,
    GET_FAVS
} from '../actions/types';

const initialState = {
    users:[],
    favs:[]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users:action.payload,
            };
        case ADD_USER:
            return {
                ...state,
                users:[action.payload, ...state.users]
            }
        case GET_FAVS:
            return {
                ...state,
                favs:action.payload
            }
        case SAVE_TO_USER:
            return {
                ...state,
                users:action.payload
            }
        default:
            return state;
    }
}