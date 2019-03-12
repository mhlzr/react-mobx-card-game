import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

import { Headline } from '../Headline/Headline';
import { CardTeaser } from '../CardTeaser/CardTeaser';
import { Player, PlayerType } from 'src/models/Player';

const StyledSection = styled.section`
    grid-area: overview;
    padding: 1em 0;
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
`;

interface CardOverviewProps {
    players: Array<Player>;
}

export const CardOverview: FunctionComponent<CardOverviewProps> = ({ players }): ReactElement => {
    return (
        <StyledSection>
            <Headline>CardOverview</Headline>
            <StyledList>
                {players.map((player: PlayerType, index) => (
                    <StyledListItem key={index}>
                        <CardTeaser player={player} selected={false}></CardTeaser>
                    </StyledListItem>))
                }
            </StyledList>
        </StyledSection>
    )
}
