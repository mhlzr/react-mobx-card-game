import React, { ReactElement, FunctionComponent } from 'react';
import { Provider } from 'mobx-react';

import { CardGameStore } from '../../stores/CardGameStore';
import { CardGameLayout } from '../CardGameLayout/CardGameLayout';

const store = new CardGameStore();

export const CardGame: FunctionComponent = (): ReactElement => {

    store.fetchPlayers();

    return (
        <Provider store={store}>
            <CardGameLayout />
        </Provider>
    )
}
