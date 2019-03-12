import React, { ReactElement, FunctionComponent, StatelessComponent } from 'react';
import styled from 'styled-components';
import { Headline } from '../Headline/Headline';
import { Button } from '../Button/Button';

const Section = styled.section`
    border: 1px solid var(--secondary-color);
    padding: 1em;
`;

export const CardControls: FunctionComponent = (): ReactElement => {
    return (
        <Section>
            <Headline>CardControls</Headline>
            <Button>Some button</Button>
        </Section>
    )
}
