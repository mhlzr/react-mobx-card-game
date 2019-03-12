import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

import { Headline } from '../Headline/Headline';
import { CardTeaser } from '../CardTeaser/CardTeaser';
import { Player, PlayerType } from 'src/models/Player';

const Section = styled.section`
    padding: 1em;
`;

const PlayerList = styled.ul`
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, calc(33% - 1em));
    grid-template-rows: 1fr;
    list-style: none;
    margin: 1em 0 0 0;
    padding: 0;
`;

interface CardOverviewProps {
    players: Array<Player>;
}

export const CardOverview: FunctionComponent<CardOverviewProps> = ({ players }): ReactElement => {
    return (
        <Section>
            <Headline>CardOverview</Headline>
            <PlayerList>
                {players.map((player: PlayerType, index) => (
                    <li key={index}>
                        <CardTeaser player={player}></CardTeaser>
                    </li>))
                }
            </PlayerList>
        </Section>
    )
}
