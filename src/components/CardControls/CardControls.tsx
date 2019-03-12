import React, { ReactElement, FunctionComponent, StatelessComponent } from 'react';
import styled from 'styled-components';
import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';

const StyledSection = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: controls;
    padding: 1em;
`;

export const CardControls: FunctionComponent = (): ReactElement => {
    return (
        <StyledSection>
            <Headline>CardControls</Headline>
            <Button>Some button</Button>
        </StyledSection>
    )
}
