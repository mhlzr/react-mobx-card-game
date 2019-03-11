import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

import { Headline } from '../Headline/Headline';
import { CardTeaser } from '../CardTeaser/CardTeaser';

const Section = styled.section`
    padding: 1em;
`;

export const CardOverview: FunctionComponent = (): ReactElement => {
    return (
        <Section>
            <Headline>CardOverview</Headline>
            <ul>
                <li><CardTeaser></CardTeaser></li>
            </ul>
        </Section>
    )
}
