import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

import { Headline } from '../Headline/Headline';

const StyledSection = styled.section`
    border: 1px solid var(--secondary-color);
    grid-area: details;
    padding: 1em;
`;

export const CardDetails: FunctionComponent = (): ReactElement => {
    return (
        <StyledSection>
            <Headline>CardDetails</Headline>
        </StyledSection>
    )
}
