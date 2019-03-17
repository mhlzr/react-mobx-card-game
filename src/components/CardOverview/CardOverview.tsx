import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Headline } from '../Headline/Headline';
import { CardTeaser } from '../CardTeaser/CardTeaser';
import { Player } from '../../models/Player';
import { CardGameStore } from '../../stores/CardGameStore';

const Section = styled.section`
    grid-area: overview;
`;

const List = styled.ul`
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    list-style: none;
    margin: 1em 0 0 0;
    padding: 0;
`;

// padding of 4 px, so the content (e.g.: Button) can have a visible outline
export const ListItem = styled.li`
    display: block;
    overflow: hidden;
    padding: 4px;
    transition: 0.16s transform cubic-bezier(.17,.67,.05,1.02);
   
    &:hover,
    &:focus,
    &:focus-within {
        transform: scale(1.06)
    }
`;

interface CardOverviewProps {
    store: CardGameStore;
}

export const CardOverviewComponent: FunctionComponent<CardOverviewProps> = ({ store }: CardOverviewProps): ReactElement | null => {

    const onPlayerSelect = (player: Player) => {
        store.player = player;
    }

    if (!Array.isArray(store.players) || !store.players.length) {
        return null;
    }

    return (
        <Section>
            <Headline>Overview</Headline>
            <List>
                {store.players.map((player: Player, index: number) => (
                    <ListItem key={index}>
                        <CardTeaser player={player} selected={store.player === player} onSelect={onPlayerSelect}></CardTeaser>
                    </ListItem>))
                }
            </List>
        </Section>
    )
};

export const CardOverview = inject('store')(observer(CardOverviewComponent));
