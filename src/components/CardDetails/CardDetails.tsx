import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

import { Headline } from '../Headline/Headline';

const Section = styled.section`
    border: 2px solid var(--secondary-color);
    padding: 1em;
`;

export const CardDetails: FunctionComponent = (): ReactElement => {
    return (
        <Section>
            <Headline>CardDetails</Headline>
        </Section>
    )
}
