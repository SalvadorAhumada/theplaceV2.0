import axios from 'axios';
import {
    GET_BOOKS,
    BOOKS_LOADING
} from './types';

export const getBooks = () => dispatch => {
    dispatch(setBooksLoading());
    axios
        .get('api/books')
        .then(res => 
            dispatch({
                type:GET_BOOKS,
                payload:res.data
            })
        )
        .catch(err => console.log(err));
};

export const setBooksLoading = () => {
    return {
        type:BOOKS_LOADING
    };
};