import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';
import { CardGameStore, PLAYER_SORTATION } from '../../stores/CardGameStore';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

const Section = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: controls;
    padding: 1em;
`;

const StyledButton = styled(Button)`
    text-transform: uppercase;

    &:last-child {
        grid-column: 1 / 3; 
    }
`;

const Controls = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    margin-top: 1em;
`;

interface CardControlsProps {
    store?: CardGameStore
}

export const CardControlsComponent: FunctionComponent<CardControlsProps> = ({ store = new CardGameStore() }: CardControlsProps): ReactElement => {
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
        <Section>
            <Headline>Controls</Headline>
            <Controls>
                <StyledButton onClick={onSortAscendingClick} selected={store.playerSortation === PLAYER_SORTATION.ASCENDING}>Sort Asc</StyledButton>
                <StyledButton onClick={onSortDescdendingClick} selected={store.playerSortation === PLAYER_SORTATION.DESCENDING}>Sort Desc</StyledButton>
                <StyledButton disabled={!player || isSaving} onClick={onSubmitClick}>
                    {isSaving && <LoadingSpinner />}
                    {!isSaving && 'Submit'}
                </StyledButton>
            </Controls>
        </Section>
    )
};

export const CardControls = inject('store')(observer(CardControlsComponent));
