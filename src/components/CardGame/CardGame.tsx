import React, { ReactElement, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Provider } from 'mobx-react';

import { CardDetails } from '../CardDetails/CardDetails';
import { CardControls } from '../CardControls/CardControls';
import { CardOverview } from '../CardOverview/CardOverview';

import cardGameStore from '../../stores/CardGameStore';

const StyledDiv = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
        "details controls"
        "overview .";
    padding: 1em;
    width: 100vw;
`;

export const CardGame: FunctionComponent = (): ReactElement => {

    cardGameStore.fetchPlayers();

    return (
        <Provider store={cardGameStore}>
            <StyledDiv>
                <CardDetails />
                <CardControls />
                <CardOverview />
            </StyledDiv>
        </Provider>
    )
}
