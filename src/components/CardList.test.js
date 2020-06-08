import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CardList from './CardList';


it('expect to render CardList component', () => {
    //shallow: tests components in isolation (excluding child components)
    const mockImages = [
        {
            id: 1,
            urls: {
                    small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
            },
            user: {
                first_name: "Hello"
            },
            likes: 3
        },
        {
            id: 2,
            urls: {
                    small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
            },
            user: {
                first_name: "Hello"
            },
            likes: 3
        },
        {
            id: 3,
            urls: {
                    small: "https://images.unsplash.com/photo-1587613757703-eea60bd69e66?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTk1Mn0"
            },
            user: {
                first_name: "Hello"
            },
            likes: 3
        }
    ]
    expect(shallow(<CardList data = {mockImages} />)).toMatchSnapshot();
})

