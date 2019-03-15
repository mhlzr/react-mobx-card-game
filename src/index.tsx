import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import './index.css';

import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

const CenteredLoadingSpinner = styled(LoadingSpinner)`
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const CardGame = lazy(() => import(/* webpackChunkName: "cardgame" */'./components/CardGame/CardGame')
    .then(({ CardGame }) => ({ default: CardGame })));

render(
    <>
        <Suspense fallback={
            <CenteredLoadingSpinner>Loading</CenteredLoadingSpinner>
        }>
            <CardGame />
        </Suspense >
    </>, document.getElementsByTagName('main')[0]);
