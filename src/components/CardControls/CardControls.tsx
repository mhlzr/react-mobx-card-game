/** @jsx jsx */
import React, { ReactElement, FunctionComponent, StatelessComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';

const cardControlsLayout = css`
    border: 2px solid var(--secondary-color);
    padding: 1em;
`;

export const CardControls: FunctionComponent = (): ReactElement => {
    return (
        <section css={cardControlsLayout}>
            <Headline>CardControls</Headline>
            <Button>Some button</Button>
        </section>
    )
}
