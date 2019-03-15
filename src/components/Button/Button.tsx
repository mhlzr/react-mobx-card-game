import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';

export const buttonReset = () => `
    appearance: none;
    background-color: transparent;
    border: 1px solid currentColor;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    font-style: normal;
    padding: 0.4em 0.5em;
    transition: opacity 0.08s ease-out;

    &[aria-pressed=true]{
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const StyledButton = styled.button`
    ${buttonReset}
    text-transform: uppercase;
    border: 1px solid currentColor;
`;

interface ButtonProps {
    type?: string;
    disabled?: boolean;
    onClick?(): void;
    children: JSX.Element[] | JSX.Element | string;
    selected?: boolean,
}

export const Button: FunctionComponent<ButtonProps> = ({ type, disabled = false, selected = false, onClick, children }: ButtonProps): ReactElement => {
    return (
        <StyledButton disabled={disabled} type={type} aria-pressed={selected} onClick={onClick}>{children}</StyledButton>
    );
}
