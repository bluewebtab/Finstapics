import {shallow, mount, render} from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

let wrapper;

beforeEach(() => {
   const mockProps = {
    onRequestImages: jest.fn()
   }

   wrapper = shallow(<SearchBox {...mockProps}/>)
})

it('renders SearchBox without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    
})