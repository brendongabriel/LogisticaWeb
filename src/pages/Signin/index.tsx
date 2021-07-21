import React from 'react';
import { Container, Background, Content } from './style';

import Input from '../../components/input';

import { FiLogIn } from 'react-icons/fi'

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <form>
                <h1>Faça seu login</h1>

                <Input name="Email" />
                <Input type="password" name="Senha" />

                <button type="submit">Entrar</button>

                <a href="teste">Esqueci minha senha</a>
            </form>
            <a href="teste">
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background/>
    </Container>


);

export default SignIn;