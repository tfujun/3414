import React from 'react';
import * as Styled from './Styled';

interface HeaderProps {
    children?: any;
}

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const {
        children
    } = props;

    return (
        <Styled.Header>
            {children}
        </Styled.Header>
    )
}

export default Header;
