/** @jsx jsx */
import React, { ReactElement, FunctionComponent } from 'react';
import { css, jsx } from '@emotion/core';

const headlineLayout = css`
    margin: 0;
`;

interface HeadlineProps {
    children: JSX.Element[] | JSX.Element | string;
}

export const Headline: FunctionComponent = ({ children }: HeadlineProps): ReactElement => {
    return (
        <h1 css={headlineLayout}>
            {children}
        </h1>
    )
}
