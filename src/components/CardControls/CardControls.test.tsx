import React from 'react';
import { mount, ReactWrapper } from 'enzyme'

import { CardControlsComponent } from './CardControls';
import { cardGameStore } from '../../stores/__mock__/cardGameStore.mock';
import { Button } from '../Button/Button';
import { PLAYER_SORTATION } from '../../stores/CardGameStore';

describe('CardControls', () => {

    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<CardControlsComponent store={cardGameStore} />);
    });

    it('renders three action buttons', () => {
        const buttons = wrapper.find(Button);
        expect(buttons).toHaveLength(3);
        expect(buttons.at(0).text()).toContain('Sort Asc');
        expect(buttons.at(1).text()).toContain('Sort Desc');
        expect(buttons.at(2).text()).toContain('Submit');
    });

    it('clicking the sort asc button will update the store', () => {
        const button = wrapper.find(Button).at(0);
        button.simulate('click');
        expect(cardGameStore.playerSortation).toEqual(PLAYER_SORTATION.ASCENDING);
    });

    it('clicking the sort asc button will update the store', () => {
        const button = wrapper.find(Button).at(1);
        button.simulate('click');
        expect(cardGameStore.playerSortation).toEqual(PLAYER_SORTATION.DESCENDING);
    });

    xit('clicking the submit button will call the store', () => {
        const button = wrapper.find(Button).at(2);
        button.simulate('click');
        expect(cardGameStore.savePlayerSelection.mock.calls.length).toBe(1);
    });

    it('has a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
})
