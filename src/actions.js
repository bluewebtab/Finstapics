import axios from 'axios';

import {CHANGE_SEARCH_FIELD,
        REQUEST_IMAGES_PENDING,
        REQUEST_IMAGES_SUCCESS,
        REQUEST_IMAGES_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestImages = () => {
    return (dispatch) => {
    dispatch({type: REQUEST_IMAGES_PENDING});
     axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        dispatch({type: REQUEST_IMAGES_SUCCESS, payload: response.data})
    })
    .catch(error => dispatch({type: REQUEST_IMAGES_FAILED, payload: error})
    )
 }
}





// export const requestImages = () => (dispatch) => {
    
//     dispatch({type: REQUEST_IMAGES_PENDING});
//     fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then(data => {
//         dispatch({type: REQUEST_IMAGES_SUCCESS, payload: data})
//     })
//     .catch(error => dispatch({type: REQUEST_IMAGES_FAILED, payload: error})
//     )

// }