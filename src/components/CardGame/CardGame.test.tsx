import React from 'react';
import { shallow } from 'enzyme'

import { CardGame } from './CardGame';

describe('CardGame', () => {
    it('has a snapshot', () => {
        const wrapper = shallow(<CardGame />);
        expect(wrapper).toMatchSnapshot();
    });
})
