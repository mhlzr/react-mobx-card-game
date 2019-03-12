import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import './index.css';

import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

const CardGame = lazy(() => import(/* webpackChunkName: "cardgame" */'./components/CardGame/CardGame')
    .then(({ CardGame }) => ({ default: CardGame })));

render(
    <>
        <Suspense fallback={<LoadingSpinner />}>
            <CardGame />
        </Suspense >
    </>, document.getElementsByTagName('main')[0]);
