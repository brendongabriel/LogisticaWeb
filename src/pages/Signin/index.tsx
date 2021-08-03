import React, { useRef, useCallback, useContext } from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { Form } from "@unform/web";
import { useAuth } from "../../hooks/auth";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from "./styles";
import { useToast } from "../../hooks/toast";

// tipos de dados que vao ser atribuidos do formulario
interface SignInFormData {
  email: string;
  senha: string;
};

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Informe um e-mail válido"),
        senha: Yup.string().required("Senha obrigatoria")
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        senha: data.senha
      })
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
      addToast({
        type: "error",
        title: "Erro na autenticacao",
        description: "Ocorreu um erro ao fazer login",
      });
    }
  }, [signIn, addToast]);
  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="senha" type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <a href="teste">Esqueci minha senha</a>
        </Form>

        <a href="teste">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
)};

export default SignIn;
