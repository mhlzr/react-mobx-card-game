import React, { ReactElement, FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const HeadlineLayout = styled.h1`
    font-size: 2em;
    font-weight: normal;
    margin: 0;
`;

interface HeadlineProps {
    children: ReactNode;
}

export const Headline: FunctionComponent<HeadlineProps> = ({ children }: HeadlineProps): ReactElement => {
    return (
        <HeadlineLayout>
            {children}
        </HeadlineLayout>
    )
}
