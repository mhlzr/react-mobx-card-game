import React, { ReactElement, FunctionComponent, StatelessComponent } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';
import { CardGameStore, PLAYER_SORTATION } from '../../stores/CardGameStore';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

const StyledSection = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: controls;
    padding: 1em;
`;

const Controls = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    margin-top: 1em;

    button:last-child {
        grid-column: 1 / 3; 
    }
`;

interface CardControlsProps {
    store: CardGameStore
}

export const CardControls: FunctionComponent<CardControlsProps> = inject('store')(observer(({ store }: CardControlsProps): ReactElement => {
    const { player, isSaving } = store;

    const onSortAscendingClick = () => {
        store.playerSortation = PLAYER_SORTATION.ASCENDING;
    }

    const onSortDescdendingClick = () => {
        store.playerSortation = PLAYER_SORTATION.DESCENDING;
    }

    const onSubmitClick = () => {
        store.savePlayerSelection();
    };

    return (
        <StyledSection>
            <Headline>Controls</Headline>
            <Controls>
                <Button onClick={onSortAscendingClick} selected={store.playerSortation === PLAYER_SORTATION.ASCENDING}>Sort Asc</Button>
                <Button onClick={onSortDescdendingClick} selected={store.playerSortation === PLAYER_SORTATION.DESCENDING}>Sort Desc</Button>
                <Button disabled={!player || isSaving} onClick={onSubmitClick}>
                    {isSaving && <LoadingSpinner />}
                    {!isSaving && 'Submit'}
                </Button>
            </Controls>
        </StyledSection>
    )
}));
