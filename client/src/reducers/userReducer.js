import {
    ADD_USER,
    GET_USERS
} from '../actions/types';

const initialState = {
    users:[],
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
        default:
            return state;
    }
}