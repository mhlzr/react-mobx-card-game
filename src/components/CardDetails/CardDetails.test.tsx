import React from 'react';
import { mount } from 'enzyme'

import { CardDetailsComponent, ListItem } from './CardDetails';
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

    it('renders the player\'s name, alias and asset', () => {
        const player = cardGameStore.players[0];
        cardGameStore.player = player;
        const wrapper = mount(<CardDetailsComponent store={cardGameStore} />);
        const items = wrapper.find(ListItem);
        expect(items).toHaveLength(3);
        expect(items.at(0).text()).toEqual(player.name);
        expect(items.at(1).text()).toEqual(player.alias);
        expect(items.at(2).text()).toEqual(player.asset);
    });

    it('has a snapshot', () => {
        cardGameStore.player = cardGameStore.players[0];
        const wrapper = mount(<CardDetailsComponent store={cardGameStore} />);
        expect(wrapper).toMatchSnapshot();
    });
})
