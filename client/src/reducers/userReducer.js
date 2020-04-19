import {
    ADD_USER,
    GET_USERS,
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
        default:
            return state;
    }
}