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

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Circle = styled.div`
    animation: ${animation} 0.8s infinite ease-in-out;
    border-radius: 50%;
    border: 0.1em solid transparent;
    border-right-color: currentColor;
    color: inherit;
    font-size: 1.5em;
    height: 1em;
    margin: 0 0 0.5em -0.5em;
    width: 1em;
    will-change: transform;
`;


interface LoadingSpinnerProps {
    className?: string;
    children: JSX.Element[] | JSX.Element | string;
}

export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({ className, children }: LoadingSpinnerProps): ReactElement => {
    return (
        <Wrapper className={className}>
            <Circle />
            {children}
        </Wrapper>
    )
}



