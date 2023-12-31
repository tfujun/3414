import React from 'react';
import * as Styled from './Styled';

interface PageContainerProps {
    children?: any;
}

const PageContainer: React.FunctionComponent<PageContainerProps> = (props: PageContainerProps) => {
    const {
        children
    } = props;

    return(
        <Styled.PageContainer>
            {children}
        </Styled.PageContainer>
    )
}

export default PageContainer;
