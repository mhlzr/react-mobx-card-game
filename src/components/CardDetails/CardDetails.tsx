import React, { ReactElement, FunctionComponent } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

// As jest & babel have some toruble with default renderprops, .cjs is imported
// @see https://github.com/babel/babel/issues/9543 
import { Spring } from 'react-spring/renderprops.cjs';

import { Headline } from '../Headline/Headline';
import { CardGameStore } from '../../stores/CardGameStore';

const Section = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: details;
    padding: 1em;
    overflow: hidden;
`;

export const List = styled.ul`
    font-size: 1.5em;
    list-style: none;
    margin: 1em 0;
    padding: 0;
`;

export const ListItem = styled.li`
    &:before {
        content: '—';
        padding-right: 0.5em
    }
`

interface CardDetailsProps {
    store?: CardGameStore;
}

export const CardDetailsComponent: FunctionComponent<CardDetailsProps> = ({ store = new CardGameStore() }: CardDetailsProps): ReactElement | null => {
    const { player } = store;

    if (!player) {
        return null;
    }

    return (
        <Spring from={{ opacity: 0, maxHeight: '0' }} to={{ opacity: 1, maxHeight: 'auto' }}>{props =>
            <Section style={props}>
                <Headline>Details</Headline>
                <List>
                    <ListItem>{player.name}</ListItem>
                    <ListItem>{player.alias}</ListItem>
                    <ListItem>{player.asset}</ListItem>
                </List>
            </Section>
        }</Spring>
    )
};

export const CardDetails = inject('store')(observer(CardDetailsComponent));
