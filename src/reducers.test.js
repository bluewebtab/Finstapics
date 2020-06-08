import {CHANGE_SEARCH_FIELD,
    REQUEST_IMAGES_PENDING,
    REQUEST_IMAGES_SUCCESS,
    REQUEST_IMAGES_FAILED
} from './constants';

import * as reducers from './reducers';


describe('search Images', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        expect(reducers.searchImages(undefined, {})).toEqual({searchField: ''})
    })

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchImages(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
})

describe('request images', () => {
    const initialStateImages = {
        images: [],
        isPending: false
    }

    it('should return the initial state', () => {
        expect(reducers.requestImages(undefined,{})).toEqual(initialStateImages)
    })

    it('should handle REQUEST_IMAGES_PENDING action', () => {
        expect(reducers.requestImages(initialStateImages, {
            type: REQUEST_IMAGES_PENDING
        })).toEqual({
            images:[],
            isPending: true
        })
    })

    
    it('should handle REQUEST_IMAGES_SUCCESS action', () => {
        expect(reducers.requestImages(initialStateImages, {
            type: REQUEST_IMAGES_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            images:[{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false
        })
    })

    it('should handle REQUEST_IMAGES_FAILED action', () => {
        expect(reducers.requestImages(initialStateImages, {
            type: REQUEST_IMAGES_FAILED,
            payload: 'Noooooo!!'
        })).toEqual({
            error: 'Noooooo!!',
            images: [],
            isPending: false
        })
    })


})