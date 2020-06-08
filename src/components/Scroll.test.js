import {shallow, mount, render} from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expect to render Scroll component', () => {
    //shallow: tests components in isolation (excluding child components)
    expect(shallow(<Scroll />)).toMatchSnapshot();
})


