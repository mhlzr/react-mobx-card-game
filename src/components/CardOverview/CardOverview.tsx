import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Headline } from '../Headline/Headline';
import { CardTeaser } from '../CardTeaser/CardTeaser';
import { Player, PlayerType } from 'src/models/Player';
import { CardGameStore } from '../../stores/CardGameStore';

const StyledSection = styled.section`
    grid-area: overview;
`;

const StyledList = styled.ul`
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    list-style: none;
    margin: 1em 0 0 0;
    padding: 0;
`;

const StyledListItem = styled.li`
    display: block;
    overflow: hidden;
    // So the content (e.g.: Button) can have a visible outline
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

export const CardOverview: FunctionComponent<CardOverviewProps> = inject('store')(observer(({ store }: CardOverviewProps): ReactElement => {

    const onPlayerSelect = (player: Player) => {
        store.player = player;
    }

    return (
        <StyledSection>
            <Headline>Overview</Headline>
            <StyledList>
                {store.players.map((player: PlayerType, index: number) => (
                    <StyledListItem key={index}>
                        <CardTeaser player={player} selected={store.player === player} onSelect={onPlayerSelect}></CardTeaser>
                    </StyledListItem>))
                }
            </StyledList>
        </StyledSection>
    )
}));
