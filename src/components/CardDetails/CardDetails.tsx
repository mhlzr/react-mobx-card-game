import React, { ReactElement, FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import { Headline } from '../Headline/Headline';
import { CardGameStore } from 'src/stores/CardGameStore';

const StyledSection = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: details;
    padding: 1em;
`;

const StyledList = styled.ul`
    font-size: 1.5em;
    list-style: none;
    margin: 1em 0;
    padding: 0;
`;

const StyledListItem = styled.li`
    &:before {
        content: '—';
        padding-right: 0.5em
    }
`

interface CardDetailsProps {
    store: CardGameStore;
}

export const CardDetails: FunctionComponent<CardDetailsProps> = inject('store')(observer(({ store }: CardDetailsProps): ReactElement | null => {
    const { player } = store;

    if (!player) {
        return null;
    }
    return (
        <StyledSection>
            <Headline>Details</Headline>
            <StyledList>
                <StyledListItem>{player.name}</StyledListItem>
                <StyledListItem>{player.alias}</StyledListItem>
                <StyledListItem>{player.asset}</StyledListItem>
            </StyledList>
        </StyledSection>
    )
}));
