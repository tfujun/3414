import styled from "styled-components";
import { ButtonSize, FontSize } from "../Constants/Sizing";
import * as Colors from '../Colors';

interface ButtonStyle {
    fontSize?: string;
    buttonSize?: string;
    backgroundColor?: string;
    color?: string;
}

export const Button = styled.button<ButtonStyle> `
    width: ${(props => props.buttonSize || ButtonSize.Medium)};
    font-size: ${(props => props.fontSize || FontSize.Medium)};
    background-color: ${(props => props.backgroundColor || Colors.Apricot)};
    color: ${(props => props.color || Colors.White)};
    border: 2px solid;
    border-color: ${Colors.DarkApricot};
    border-radius: 20px;
    padding: 5px;

    &:hover {
        background-color: ${Colors.LightApricot};
        color: ${Colors.DarkApricot};
    }
`;
