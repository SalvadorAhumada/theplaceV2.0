import {
    GET_LINKS,
    ADD_LINK,
    DELETE_LINK,
} from '../actions/types';

const initialState = {
    links:[],
    loading:false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LINKS:
            return {
                ...state,
                links:action.payload,
                loading:false
            };
        case ADD_LINK:
            return {
                ...state,
                links:[action.payload, ...state.links]
            }
        case DELETE_LINK:
            return {
                ...state,
                links:state.links.filter(item =>  item._id !== action.payload)
            }
        default:
            return state;
    }
}