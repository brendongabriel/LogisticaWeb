import React, { InputHTMLAttributes} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    incon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({incon, ...rest}) => (
    <Container>
        <input {...rest}/>
    </Container>
);

export default Input;