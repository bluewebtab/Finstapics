import {shallow, mount, render} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
   const mockProps = {
    onRequestImages: jest.fn(),
    images: [],
    searchField: '',
    isPending: false
   }
   wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})



it('filters images correctly', () => {
    const mockProps2 = {
        onRequestImages: jest.fn(),
        images: [{
            id: 1,
            urls: {
                    small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
            },
            user: {
                first_name: "Hello"
            },
            likes: 3
        }],
        searchField: 'Hello',
        isPending: false
       }
      const wrapper2 = shallow(<MainPage {...mockProps2} />)
    //expect filterImages to run an empty array
    expect(wrapper2.instance().filterImages()).toEqual([{
        id: 1,
        urls: {
                small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
        },
        user: {
            first_name: "Hello"
        },
        likes: 3
    }])

})

it('filters images correctly 2', () => {
    const mockProps3 = {
        onRequestImages: jest.fn(),
        images: [{
            id: 1,
            urls: {
                    small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
            },
            user: {
                first_name: "Hello"
            },
            likes: 3
        }],
        searchField: 'a',
        isPending: false
       }
       const filteredImages = []
      const wrapper3 = shallow(<MainPage {...mockProps3} />)
    //expect filterImages to run an empty array
    expect(wrapper3.instance().filterImages()).toEqual(filteredImages)

})


 
