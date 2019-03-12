import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

const HeadlineLayout = styled.h1`
    margin: 0;
`;

interface HeadlineProps {
    children: JSX.Element[] | JSX.Element | string;
}

export const Headline: FunctionComponent<HeadlineProps> = ({ children }: HeadlineProps): ReactElement => {
    return (
        <HeadlineLayout>
            {children}
        </HeadlineLayout>
    )
}
