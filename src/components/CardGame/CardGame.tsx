import React, { ReactElement, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { CardDetails } from '../CardDetails/CardDetails';
import { CardControls } from '../CardControls/CardControls';
import { CardOverview } from '../CardOverview/CardOverview';
import { fetchPlayerData } from '../../api/players';

const CardGameLayout = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
        "details controls"
        "overview controls";
    padding: 1em;
`;

export const CardGame: FunctionComponent = (): ReactElement => {

    const [players, setPlayers] = useState([]);

    const fetchPlayers = async () => {
        const playerData = await fetchPlayerData();
        setPlayers(playerData);
    }

    useEffect(() => {
        fetchPlayers();
    }, []);

    return (
        <CardGameLayout>
            <CardDetails />
            <CardControls />
            <CardOverview />
        </CardGameLayout>
    )
}
