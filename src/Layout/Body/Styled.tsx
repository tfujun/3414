import styled from 'styled-components';

interface BodyProps {
    flexDirection?: string;
    padding?: string;
}

const Body = styled.div<BodyProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    padding: ${props => props.padding || '1vh 2vw'};

`;

export {
    Body
}