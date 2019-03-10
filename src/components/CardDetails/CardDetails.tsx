/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Headline } from '../Headline/Headline';

const cardDetailsLayout = css`
    border: 2px solid var(--secondary-color);
    padding: 1em;
`;

export const CardDetails: FunctionComponent = (): ReactElement => {
    return (
        <section css={cardDetailsLayout}>
            <Headline>CardDetails</Headline>
        </section>
    )
}
