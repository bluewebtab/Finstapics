import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './Card';


it('expect to render Card component', () => {
    //shallow: tests components in isolation (excluding child components)
    expect(shallow(<Card />)).toMatchSnapshot();
})

