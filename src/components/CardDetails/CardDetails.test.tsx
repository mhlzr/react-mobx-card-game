import React from 'react';
import { mount } from 'enzyme'

import { CardDetailsComponent } from './CardDetails';
import { cardGameStore } from '../../stores/__mock__/cardGameStore.mock';

describe('CardDetails', () => {

    it('does not render any content if there is no player selected', () => {
        cardGameStore.player = null;
        const wrapper = mount(<CardDetailsComponent store={cardGameStore} />);
        expect(wrapper.children()).toHaveLength(0)
    });

    it('renders if there is a player selected', () => {
        cardGameStore.player = cardGameStore.players[0];
        const wrapper = mount(<CardDetailsComponent store={cardGameStore} />);
        expect(wrapper.children()).toHaveLength(1);
    });

    it('has a snapshot', () => {
        cardGameStore.player = cardGameStore.players[0];
        const wrapper = mount(<CardDetailsComponent store={cardGameStore} />);
        expect(wrapper).toMatchSnapshot();
    });
})
