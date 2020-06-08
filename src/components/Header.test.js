import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Header from './Header'


it('expect to render Header component', () => {
    //shallow: tests components in isolation (excluding child components)
    expect(shallow(<Header />)).toMatchSnapshot();
})

