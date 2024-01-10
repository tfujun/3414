import React from 'react';
import * as Styled from './Styled';

interface BodyProps {
    children: any;
    flexDirection?: string;
    padding?: string;
}

const Body: React.FunctionComponent<BodyProps> = (props: BodyProps) => {
    const {
        children,
        flexDirection,
        padding
    } = props;

    return(
        <Styled.Body
            flexDirection={flexDirection}
            padding={padding}>
            {children}
        </Styled.Body>
    )
}

export default Body;
