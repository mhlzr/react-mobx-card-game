import React, { FunctionComponent, ReactElement } from 'react';

interface ButtonProps {
    type?: string;
    onClick?(): void;
    children: JSX.Element[] | JSX.Element | string;
}

export const Button: FunctionComponent<ButtonProps> = ({ type, onClick, children }: ButtonProps): ReactElement => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    );
}
