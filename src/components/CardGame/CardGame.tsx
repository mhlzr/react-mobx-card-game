/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';

import { CardDetails } from '../CardDetails/CardDetails';
import { CardControls } from '../CardControls/CardControls';
import { CardOverview } from '../CardOverview/CardOverview';

const cardGameLayout = css`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
        "details controls"
        "overview controls";
    padding: 1em;
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
