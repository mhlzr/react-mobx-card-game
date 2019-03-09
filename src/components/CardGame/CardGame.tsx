/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';

import { CardDetails } from '../CardDetails';
import { CardControls } from '../CardControls';
import { CardOverview } from '../CardOverview';

const cardGameLayout = css`
    display: grid;
`;

export const CardGame: FunctionComponent = (): ReactElement => {
    return (
        <div css={cardGameLayout}>
            <CardDetails />
            <CardControls />
            <CardOverview />
        </div>
    )
}
