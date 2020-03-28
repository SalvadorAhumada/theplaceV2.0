import {
    GET_BOOKS,
    BOOKS_LOADING,
    ADD_BOOK
} from '../actions/types';

const initialState = {
    books:[],
    loading:false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books:action.payload,
                loading:false
            };
        case BOOKS_LOADING:
            return {
                ...state,
                loading:true
            };
        case ADD_BOOK:
            return {
                ...state,
                books:[action.payload, ...state.books]
            }
        default:
            return state;
    }
}