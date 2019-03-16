import React, { ReactElement, FunctionComponent, StatelessComponent } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { CardGameStore } from '../../stores/CardGameStore';

import { CardDetails } from '../CardDetails/CardDetails';
import { CardControls } from '../CardControls/CardControls';
import { CardOverview } from '../CardOverview/CardOverview';

const GRID_LAYOUT_WITH_SELECTED_PLAYER = `
    "details controls"
    "overview ."
`;

const GRID_LAYOUT_WITHOUT_SELECTED_PLAYER = `
    "overview controls"
`;

const Container = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: ${({ player }) => player ? GRID_LAYOUT_WITH_SELECTED_PLAYER : GRID_LAYOUT_WITHOUT_SELECTED_PLAYER};
    max-width: 100em;
    padding: 1em;
    width: 100vw;
`;

interface CardGameLayoutProps {
    store: CardGameStore
}

export const CardGameLayout: FunctionComponent<CardGameLayoutProps> = inject('store')(observer(({ store }: CardGameLayoutProps): ReactElement => {
    return (
        <Container player={store.player}>
            <CardDetails />
            <CardControls />
            <CardOverview />
        </Container>)
}));
