/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Headline } from '../Headline/index';

const cardOverviewLayout = css`

`;

export const CardOverview: FunctionComponent = (): ReactElement => {
    return (
        <section css={cardOverviewLayout}><Headline>CardOverview</Headline></section>
    )
}
