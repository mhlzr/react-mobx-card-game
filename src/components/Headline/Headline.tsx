import React, { ReactElement, FunctionComponent } from 'react';

/*const headlineLayout = css`
    margin: 0;
`;*/

interface HeadlineProps {
    children: JSX.Element[] | JSX.Element | string;
}

export const Headline: FunctionComponent = ({ children }: HeadlineProps): ReactElement => {
    return (
        <h1>
            {children}
        </h1>
    )
}
