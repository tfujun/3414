import styled from 'styled-components';

interface PageContainerStyledProps {
    flexDirection?: string;
}

const PageContainer = styled.div<PageContainerStyledProps>`
    display: flex;
    padding: 0px;
    margin: 0px;
    gap: 5%;
    flex-direction: ${props => props.flexDirection || 'row'};
`;

export {
    PageContainer
}
