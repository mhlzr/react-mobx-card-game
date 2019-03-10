/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Headline } from '../Headline/Headline';
import { CardTeaser } from '../CardTeaser/CardTeaser';

const cardOverviewLayout = css`
    padding: 1em;
`;

export const CardOverview: FunctionComponent = (): ReactElement => {
    return (
        <section css={cardOverviewLayout}>
            <Headline>CardOverview</Headline>
            <ul>
                <li><CardTeaser></CardTeaser></li>
            </ul>
        </section>
    )
}
