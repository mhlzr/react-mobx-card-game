import React, { ReactElement, FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinnerLayout = styled.div`
    border-radius: 50%;
    box-shadow: inset 0 0 0 1em;
    color: var(--secondary-color);
    font-size: 1em;
    height: 10em;
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10em;
    will-change: transform;

    &:before,
    &:after {
        content: '';
        position: absolute;
    }

    &:before {
        animation: ${animation} 2s infinite ease 1.5s;
        background: var(--primary-color);
        border-radius: 10.2em 0 0 10.2em;
        height: 10.2em;
        left: -0.1em;
        top: -0.1em;
        transform-origin: 5.2em 5.1em;
        width: 5.2em;
    }

    &:after {
        animation: ${animation} 2s infinite ease;
        background: var(--primary-color);
        border-radius: 0 10.2em 10.2em 0;
        height: 10.2em;
        left: 5.1em;
        top: -0.1em;
        transform-origin: 0px 5.1em;
        width: 5.2em;
    }
`;

interface LoadingSpinnerProps {
    children: JSX.Element[] | JSX.Element | string;
}

export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({ children }: LoadingSpinnerProps): ReactElement => {
    return (
        <LoadingSpinnerLayout>
            {children}
        </LoadingSpinnerLayout>
    )
}



