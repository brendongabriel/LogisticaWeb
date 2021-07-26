import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu login</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="teste">Esqueci minha senha</a>
      </form>

      <a href="teste">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SigIn;
