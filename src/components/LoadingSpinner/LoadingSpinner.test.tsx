import React from 'react';
import { shallow } from 'enzyme'

import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
    it('renders without a label if none is passed', () => {
        const wrapper = shallow(<LoadingSpinner></LoadingSpinner>);
        expect(wrapper.text()).toHaveLength(0);
    });

    it('renders with a label if one is passed', () => {
        const wrapper = shallow(<LoadingSpinner>Test</LoadingSpinner>);
        expect(wrapper.text()).toEqual('Test');
    });

    it('renders with child-components', () => {
        const wrapper = shallow(<LoadingSpinner><span>Child</span></LoadingSpinner>);
        expect(wrapper.find('span')).toHaveLength(1);
        expect(wrapper.find('span').text()).toEqual('Child');
    });

    it('has a snapshot', () => {
        const wrapper = shallow(<LoadingSpinner></LoadingSpinner>);
        expect(wrapper).toMatchSnapshot();
    });
})
