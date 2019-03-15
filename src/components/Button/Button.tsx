import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    appearance: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: 1em;
    font-style: normal;
    text-transform: uppercase;
    border: 1px solid currentColor;
`;

interface ButtonProps {
    type?: string;
    onClick?(): void;
    children: JSX.Element[] | JSX.Element | string;
}

export const Button: FunctionComponent<ButtonProps> = ({ type, onClick, children }: ButtonProps): ReactElement => {
    return (
        <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
    );
}
