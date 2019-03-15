import React, { ReactElement, FunctionComponent, StatelessComponent } from 'react';
import styled from 'styled-components';
import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';

const StyledSection = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: controls;
    padding: 1em;
`;

const Controls = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
    flex-basis: ${({ primary }) => primary ? '100%' : '50%'};
`;

export const CardControls: FunctionComponent = (): ReactElement => {
    return (
        <StyledSection>
            <Headline>Controls</Headline>
            <Controls>
                <StyledButton>Sort Asc</StyledButton>
                <StyledButton>Sort Desc</StyledButton>
                <StyledButton type="submit" primary="true">Submit</StyledButton>
            </Controls>
        </StyledSection>
    )
}
