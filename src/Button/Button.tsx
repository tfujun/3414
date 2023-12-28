import React from 'react';
import * as Styled from './Styled';
import { FontSize } from '../Constants/Sizing';

interface ButtonProps {
    fontSize?: FontSize;
    buttonSize?: string;
    color?: string;
    backgroundColor?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: any;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const {
        fontSize,
        buttonSize,
        color,
        backgroundColor,
        onClick,
        children
    } = props;

    return(
        <Styled.Button
            fontSize={fontSize}
            buttonSize={buttonSize}
            color={color}
            backgroundColor={backgroundColor}
            onClick={onClick ? onClick : () => {}}>
            {children}
        </Styled.Button>
    )
}

export default Button;
