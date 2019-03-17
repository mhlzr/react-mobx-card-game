import React from 'react';
import { shallow } from 'enzyme'

import { Headline } from './Headline';

describe('Headline', () => {

    it('renders with a label if one is passed', () => {
        const wrapper = shallow(<Headline>Test</Headline>);
        expect(wrapper.text()).toEqual('Test');
    });

    it('renders with child-components', () => {
        const wrapper = shallow(<Headline><span>Child</span></Headline>);
        expect(wrapper.find('span')).toHaveLength(1);
        expect(wrapper.find('span').text()).toEqual('Child');
    });

    it('has a snapshot', () => {
        const wrapper = shallow(<Headline>Test</Headline>);
        expect(wrapper).toMatchSnapshot();
    });
})
