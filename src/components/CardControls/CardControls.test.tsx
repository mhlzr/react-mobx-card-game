import React from 'react';
import { shallow } from 'enzyme'

import { CardControls } from './CardControls';
import { CardGameStore } from '../../stores/CardGameStore';

describe('CardControls', () => {

    let store: CardGameStore;

    beforeEach(() => {
        store = new CardGameStore();
    });

    it('does not render any content if there is no player selected', () => {
        store.player = null;
        const wrapper = shallow(<CardControls store={store} />);
        expect(wrapper.children()).toHaveLength(0)
    });

    it('has a snapshot', () => {
        const wrapper = shallow(<CardControls store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
})
