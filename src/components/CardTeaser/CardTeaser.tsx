import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Player } from 'src/models/Player';
import { Button } from '../Button/Button';

const StyledButton = styled(Button)`
    display: block;
    font-size: 1.2em;
    height: 100%;
    padding: 1em;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
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
    console.log(selected);
    return (
        <StyledButton selected={selected} tabIndex={0} onClick={() => onSelect(player)}>
            <Text>{name}</Text>
            <Text>{alias}</Text>
            <Text>{asset}</Text>
        </StyledButton>
    )
}
