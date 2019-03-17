import React from 'react';
import { mount } from 'enzyme'

import { CardOverviewComponent, ListItem } from './CardOverview';
import { cardGameStore, emptyCardGameStore } from '../../stores/__mock__/cardGameStore.mock';

describe('CardOverview', () => {

    it('does not render any content if there are no players available', () => {
        const wrapper = mount(<CardOverviewComponent store={emptyCardGameStore} />);
        expect(wrapper.children()).toHaveLength(0);
    });

    it('renders if there are players available', () => {
        const wrapper = mount(<CardOverviewComponent store={cardGameStore} />);
        expect(wrapper.find(ListItem)).toHaveLength(cardGameStore.players.length);
    });

    it('has a snapshot', () => {
        const wrapper = mount(<CardOverviewComponent store={cardGameStore} />);
        expect(wrapper).toMatchSnapshot();
    });
})
