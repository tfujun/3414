import React from 'react';
import * as Styled from './Styled';

interface InputFieldProps {
    type: 'text' | 'number';
    size?: string;
}

const InputField: React.FunctionComponent<InputFieldProps> = (props: InputFieldProps) => {
    
    const {
        type,
        size
    } = props;
    
    return (
        <Styled.InputField
            type={type}
            size={size}
            >
        </Styled.InputField>
    )
}

export default InputField;
