import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Player } from 'src/models/Player';

const CardTeaserLayout = styled.button`
    appearance: none;
    background-color: transparent;
    border: 1px solid currentColor;
    color: var(--secondary-color);
    display: flex;
    font-family: inherit;
    font-style: normal;
    flex-direction: column;
    height: 100%;
    padding: 2em;
    text-align: left;
    width: 100%;
`;

const Text = styled.span`
    display: block;
    font-size: 3em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`

const Name = styled(Text)`
`;

const Alias = styled(Text)`
    margin: 1em 0;
`;

const Asset = styled(Text)`
`;

interface CardTeaserProps {
    player: Player,
    selected?: boolean
}

export const CardTeaser: FunctionComponent<CardTeaserProps> = ({ player }): ReactElement => {
    const { name, alias, asset } = player;
    return (
        <CardTeaserLayout type="button" aria-pressed="true">
            <Name>{name}</Name>
            <Alias>{alias}</Alias>
            <Asset>{asset}</Asset>
        </CardTeaserLayout>
    )
}
