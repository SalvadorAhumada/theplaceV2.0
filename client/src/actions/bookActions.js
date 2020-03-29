import axios from 'axios';
import {
    GET_BOOKS,
    ADD_BOOK,
    DELETE_BOOK,
    BOOKS_LOADING
} from './types';

export const getBooks = () => dispatch => {
    dispatch( setBooksLoading() )
    axios
        .get('api/books')
        .then(res => 
            dispatch({
                type:GET_BOOKS,
                payload:res.data
            })
        )
        .catch(err => 
            axios
            .get('api/books')
            .then(res => 
                dispatch({
                    type:GET_BOOKS,
                    payload:res.data
                })
                )
                .catch(err => console.log(err))
            );
};

export const addBook = newBook => dispatch => {
    axios
    .post('api/books', newBook)
          .then( res => {    
              dispatch({
                  type:ADD_BOOK,
                  payload:newBook
              })
              dispatch( getBooks() )
          }).catch( err => console.log(err))
}

export const deleteBook = id => dispatch => {
    axios
    .delete(`/api/books/${id}`)
        .then(res => {
            dispatch({
                type:DELETE_BOOK,
                payload:id
            })
        }).catch( err => console.log(err));
}

export const setBooksLoading = () => {
    return {
        type:BOOKS_LOADING
    }
};