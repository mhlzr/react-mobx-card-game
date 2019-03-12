import React, { ReactElement, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { CardDetails } from '../CardDetails/CardDetails';
import { CardControls } from '../CardControls/CardControls';
import { CardOverview } from '../CardOverview/CardOverview';
import { fetchPlayers } from '../../api/players';

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

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const players = await fetchPlayers();
            setPlayers(players);
        }
        fetch();
    }, []);

    return (
        <StyledDiv>
            <CardDetails />
            <CardControls />
            <CardOverview players={players} />
        </StyledDiv>
    )
}
