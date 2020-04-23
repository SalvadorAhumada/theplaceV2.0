import axios from 'axios';
import {
    ADD_USER,
    GET_USERS,
    SAVE_TO_USER,
    GET_FAVS
} from './types';

export const addUser = newUser => dispatch => {
    axios
    .post('api/users', newUser)
          .then( res => {    
              dispatch({
                  type:ADD_USER,
                  payload:newUser
              })
              dispatch( getUsers() )
          }).catch( err => console.log(err))
}

export const saveToUser = info => dispatch => {
    axios
    .patch('api/users', info)
        .then( res => {
            dispatch({
                type:SAVE_TO_USER,
                payload:info
            })
            dispatch( getFavs() )
        }).catch( err => console.log(err))
}

export const getUsers = () => dispatch => {
    axios
        .get('api/users')
        .then(res => 
            dispatch({
                type:GET_USERS,
                payload:res.data
            })
        )
        .catch(err => 
            axios
            .get('api/users')
            .then(res => 
                dispatch({
                    type:GET_USERS,
                    payload:res.data
                })
                )
                .catch(err => console.log(err))
            );
};

export const getFavs = () => dispatch => {
    axios
        .get('api/users')
        .then(res => 
            dispatch({
                type:GET_FAVS,
                payload:res.data[0].favorites
            })
            )
            .catch(err => console.log(err))
    };