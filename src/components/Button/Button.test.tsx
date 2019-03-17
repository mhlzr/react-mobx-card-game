import React from 'react';
import { shallow } from 'enzyme'

import { Button } from './Button';

describe('Button', () => {
    it('renders with a label', () => {
        const wrapper = shallow(<Button>Test</Button>);
        expect(wrapper.text()).toEqual('Test');
    });

    it('renders with child-components', () => {
        const wrapper = shallow(<Button><span>Child</span>></Button>);
        expect(wrapper.find('span')).toHaveLength(1);
        expect(wrapper.find('span').text()).toEqual('Child');
    });

    it('has an onClick handler', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Button onClick={onClick}>Test</Button>);
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    it('has a snapshot', () => {
        const wrapper = shallow(<Button>Test</Button>);
        expect(wrapper).toMatchSnapshot();
    });
})
