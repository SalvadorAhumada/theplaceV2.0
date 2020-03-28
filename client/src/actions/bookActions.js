import axios from 'axios';
import {
    GET_BOOKS,
    ADD_BOOK
} from './types';

export const getBooks = () => dispatch => {
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
          }).catch( err => console.log(err))
}