import {CHANGE_SEARCH_FIELD,
    REQUEST_IMAGES_PENDING,
    REQUEST_IMAGES_SUCCESS,
    REQUEST_IMAGES_FAILED
} from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';
import fetchMock from 'fetch-mock';



 const mockStore = configureMockStore([thunkMiddleware]);



it('should create an action to search images', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting images API', () => {
    const store = mockStore();
    store.dispatch(actions.requestImages());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_IMAGES_PENDING
    }
    expect(action[0]).toEqual(expectedAction)

})






describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });
    const data = {
        id: 1,
        urls: {
                small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
        },
        user: {
            first_name: "Hello"
        },
        likes: 3
    };

    it('handles  a successful request', () => {
     fetchMock
            .getOnce(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`, data);
        
     
      const expectedActions = {type: REQUEST_IMAGES_SUCCESS, payload: data}

      const store = mockStore({});
      
      return store.dispatch(actions.requestImages()).then(() => {
        const action = store.getActions()
        expect(action[1]).toEqual(expectedActions)
       })

    });
    fetchMock.reset();
  });






























        


    

    
    
