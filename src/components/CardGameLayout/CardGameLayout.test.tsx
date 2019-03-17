import React from 'react';
import { shallow } from 'enzyme'

import { CardGameLayoutComponent } from './CardGameLayout';

describe('CardGameLayout', () => {
    it('has a snapshot', () => {
        const wrapper = shallow(<CardGameLayoutComponent />);
        expect(wrapper).toMatchSnapshot();
    });
})
