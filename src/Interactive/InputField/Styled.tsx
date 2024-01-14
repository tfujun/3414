import styled from 'styled-components';
import { InputFieldSize } from '../../Constants/Sizing';

interface InputFieldProps {
    size?: string;
    type: string;
}

const InputField = styled.input<InputFieldProps>`
    width: ${props => props.size || InputFieldSize.Medium};
    type: ${props => props.type};
`;

export {
    InputField
}
