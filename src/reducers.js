import {CHANGE_SEARCH_FIELD,
        REQUEST_IMAGES_PENDING,
        REQUEST_IMAGES_SUCCESS,
        REQUEST_IMAGES_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchImages = (state=initialStateSearch, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
            default:
                return state; 
    }
}

const initialStateImages = {
  images: [],
  isPending: false
}

export const requestImages = (state=initialStateImages, action={}) => {
    switch(action.type){
        case REQUEST_IMAGES_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_IMAGES_SUCCESS:
            return Object.assign({}, state, {images: action.payload, isPending: false})
        case REQUEST_IMAGES_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default: 
            return state;
    }
}