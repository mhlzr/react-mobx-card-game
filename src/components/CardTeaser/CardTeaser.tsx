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
    font-size: 2em;
    height: 100%;
    padding: 1em;
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

export const CardTeaser: FunctionComponent<CardTeaserProps> = ({ player, selected }): ReactElement => {
    const { name, alias, asset } = player;
    return (
        <StyledPseudoButton aria-pressed={selected} tabindex="0" role="button">
            <Name>{name}</Name>
            <Alias>{alias}</Alias>
            <Asset>{asset}</Asset>
        </StyledPseudoButton>
    )
}
