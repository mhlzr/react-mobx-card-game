import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    appearance: none;
    background-color: transparent;
    border: 1px solid currentColor;
    color: inherit;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    font-style: normal;
    font-weight: normal;
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

export interface ButtonProps {
    className?: string;
    type?: string;
    disabled?: boolean;
    onClick?(): void;
    children: ReactNode;
    selected?: boolean,
}

export const Button: FunctionComponent<ButtonProps> = ({ className, type, disabled = false, selected = false, onClick, children }: ButtonProps): ReactElement => {
    return (
        <StyledButton className={className} disabled={disabled} type={type} aria-pressed={selected} onClick={onClick}>{children}</StyledButton>
    );
}
