import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

const CardGame = lazy(() => import('./components/CardGame/CardGame')
    .then(({ CardGame }) => ({ default: CardGame })));

render(
    <div>
        <Suspense fallback={<LoadingSpinner />}>
            <CardGame />
        </Suspense>
    </div>, document.getElementsByTagName('main')[0]);
