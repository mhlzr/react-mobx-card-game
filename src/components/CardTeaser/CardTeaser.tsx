import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Player } from 'src/models/Player';

// An actual button caused rendering issues :(
const StyledPseudoButton = styled.div`
    border: 1px solid currentColor;
    color: var(--secondary-color);
    cursor: pointer;
    display: block;
    font-family: inherit;
    font-size: 1.2em;
    height: 100%;
    padding: 1em;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &[aria-pressed=true]{
        background-color: var(--secondary-color);
        color: var(--primary-color);

    }
`;

const Text = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

interface CardTeaserProps {
    player: Player,
    selected?: boolean,
    onSelect: (player: Player) => void,
}

export const CardTeaser: FunctionComponent<CardTeaserProps> = ({ player, selected, onSelect }): ReactElement => {
    const { name, alias, asset } = player;
    return (
        <StyledPseudoButton aria-pressed={selected} tabIndex={0} role="button" onClick={() => onSelect(player)}>
            <Text>{name}</Text>
            <Text>{alias}</Text>
            <Text>{asset}</Text>
        </StyledPseudoButton>
    )
}
