import React from 'react';
import * as Styled from './Styled';

interface PageContainerProps {
    children?: any;
    flexDirection?: string;
}

const PageContainer: React.FunctionComponent<PageContainerProps> = (props: PageContainerProps) => {
    const {
        children,
        flexDirection
    } = props;

    return(
        <Styled.PageContainer
            flexDirection={flexDirection}
        >
            {children}
        </Styled.PageContainer>
    )
}

export default PageContainer;
