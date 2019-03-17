import React from 'react';
import { shallow } from 'enzyme'

import { CardControls } from './CardControls';
import { cardGameStore } from '../../stores/__mock__/cardGameStore.mock';

describe('CardControls', () => {

    it('has a snapshot', () => {
        const wrapper = shallow(<CardControls store={cardGameStore} />);
        expect(wrapper).toMatchSnapshot();
    });
})
