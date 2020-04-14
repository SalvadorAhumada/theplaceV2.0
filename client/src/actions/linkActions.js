import axios from 'axios';
import {
    GET_LINKS,
    ADD_LINK,
    DELETE_LINK,
    LINK_LOADING
} from './types';

export const getLinks = () => dispatch => {
    dispatch( setLinkLoading() )
    axios
        .get('api/links')
        .then(res => 
            dispatch({
                type:GET_LINKS,
                payload:res.data
            })
        )
        .catch(err => 
            axios
            .get('api/links')
            .then(res => 
                dispatch({
                    type:GET_LINKS,
                    payload:res.data
                })
                )
                .catch(err => console.log(err))
            );
};

export const addLink = newLink => dispatch => {
    axios
    .post('api/links', newLink)
          .then( res => {    
              dispatch({
                  type:ADD_LINK,
                  payload:newLink
              })
              dispatch( getLinks() )
          }).catch( err => console.log(err))
}

export const deleteLink = id => dispatch => {
    axios
    .delete(`/api/links/${id}`)
        .then(res => {
            dispatch({
                type:DELETE_LINK,
                payload:id
            })
        }).catch( err => console.log(err));
}

export const setLinkLoading = () => {
    return {
        type:LINK_LOADING
    }
};