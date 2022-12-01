import { Form } from "../../components/Form";
import { FormContainer } from "../../components/Form/styles";
import { TitleStyled } from "../../components/fonts/Title/styles";
import { TextStyled } from "../../components/fonts/Text/styles";
import { Header } from "../../components/Header";
import { ButtonPrimary } from "../../components/Button/Primary";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { fieldsList } from "./registerFormFieldsList";

export function Register() {
  const { register, handleSubmit, formState: errors } = useForm();

  async function createUser(data) {
    try {
      await api.post("/users", data);
    } catch (err) {}
  }

  async function submitData(data) {
    await createUser(data);
  }

  return (
    <FormContainer>
      <Header buttonText="Voltar" to="/login" />
      <main>
        <TitleStyled tag="h2">Crie sua conta</TitleStyled>
        <TextStyled tag="span">Rápido e grátis, vamos nessa</TextStyled>
        <Form errors={errors} fieldsList={fieldsList} onSubmit={handleSubmit(submitData)} />
        <ButtonPrimary type="default">Cadastrar</ButtonPrimary>
      </main>
    </FormContainer>
  );
}
