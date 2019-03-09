/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Headline } from '../Headline/index';

const cardDetailsLayout = css`

`;

export const CardDetails: FunctionComponent = (): ReactElement => {
    return (
        <section css={cardDetailsLayout}>
            <Headline>CardDetails</Headline>
        </section>
    )
}
