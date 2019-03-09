/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';
import { Headline } from '../Headline';
import { Button } from '../Button';

const cardControlsLayout = css`

`;

export const CardControls: FunctionComponent = (): ReactElement => {
    return (
        <section css={cardControlsLayout}>
            <Headline>CardControls</Headline>
            <Button>Some button</Button>
        </section>
    )
}
