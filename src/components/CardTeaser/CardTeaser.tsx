import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';

const cardTeaserLayout = css`
    padding: 1em;
`;

export const CardTeaser: FunctionComponent = (): ReactElement => {
    return (
        <button type="button" css={cardTeaserLayout} aria-pressed="true"></button>
    )
}
