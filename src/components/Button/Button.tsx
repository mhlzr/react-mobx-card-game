import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';

const ButtonLayout = styled.button`
`;

interface ButtonProps {
    type?: string;
    onClick?(): void;
    children: JSX.Element[] | JSX.Element | string;
}

export const Button: FunctionComponent<ButtonProps> = ({ type, onClick, children }: ButtonProps): ReactElement => {
    return (
        <ButtonLayout type={type} onClick={onClick}>{children}</ButtonLayout>
    );
}
