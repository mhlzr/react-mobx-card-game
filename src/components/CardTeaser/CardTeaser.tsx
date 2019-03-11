import React, { ReactElement, FunctionComponent } from 'react';
import styled from 'styled-components';

const CardTeaserLayout = styled.button`
    padding: 1em;
`;

export const CardTeaser: FunctionComponent = (): ReactElement => {
    return (
        <CardTeaserLayout type="button" aria-pressed="true"></CardTeaserLayout>
    )
}
