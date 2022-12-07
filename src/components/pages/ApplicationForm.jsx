import React from "react";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import { ApplicationEmail } from "./ApplicationEmail";
import axiosAPI from "../../api/axios";

const backSmtp = async (form) => {
  await ApplicationEmail();
  const userDataEmail = sessionStorage.getItem("userEmail");
  const userEmail = JSON.parse(userDataEmail);
  await axiosAPI.post("/smtp", { form, userEmail });
};

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const ApplicationForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          city: "",
          email: "",
          firstCommitment: "",
          secondCommitment: "",
          thirdCommitment: "",
          forthCommitment: "",
          fifthCommitment: "",
          field1: "",
          field2: "",
          field3: "",
          field4: "",
          acceptedTerms: false, // added for our checkbox
          reason: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Até 15 caracteres")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Até 20 caracteres")
            .required("Required"),
          email: Yup.string().email("Email inválido").required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "Você deve aceitar os termos e condições."),
          reason: Yup.string()
            .oneOf(["Companhia", "Distração", "Proteger", "Outro"], "Inválido")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            backSmtp(values);
            setSubmitting(true);
          }, 200);
        }}
      >
        <Form>
          <MyTextInput
            label="Nome:"
            name="firstName"
            type="text"
            placeholder="Nome"
          />

          <MyTextInput
            label="Sobrenome: "
            name="lastName"
            type="text"
            placeholder="Sobrenome"
          />
          <br />
          <MyTextInput
            label="Email:"
            name="email"
            type="email"
            placeholder="Email"
          />
          <br />
          <MyTextInput
            label="Telefone:"
            name="phone"
            type="text"
            placeholder="Telefone"
          />
          <br />
          <MyTextInput
            label="Cidade:"
            name="city"
            type="text"
            placeholder="Cidade"
          />
          <br />
          <label>Razão: </label>
          <MySelect name="reason">
            <option value="">Selecione</option>
            <option value="Companhia">Companhia</option>
            <option value="Distração">Distração p/ os filhos</option>
            <option value="Proteger">Proteger a casa</option>
            <option value="Outro">Outro</option>
          </MySelect>

          <Field component="div" name="firstCommitment">
            <label>
              Em caso de urgência, tem como levar o animal imediatamente a um
              veterinário?
            </label>
            <br />
            <input
              type="radio"
              id="commitmentYes"
              name="firstCommitment"
              value="Sim"
            />
            <label htmlFor="commitmentYes">Sim</label>
            <input
              type="radio"
              id="commitmentNo"
              name="firstCommitment"
              value="Não"
            />
            <label htmlFor="commitmentNo">Não</label>
          </Field>
          <br />
          <Field component="div" name="secondCommitment">
            <label>
              Para cuidar do animal apropriadamente, você terá gastos com
              alimentação, cuidados de higiene e veterinário. Está em condições
              financeiras para isso?
            </label>
            <br />
            <input
              type="radio"
              id="commitmentYes2"
              name="secondCommitment"
              value="Sim"
            />
            <label htmlFor="commitmentYes2">Sim</label>
            <input
              type="radio"
              id="commitmentNo2"
              name="secondCommitment"
              value="Não"
            />
            <label htmlFor="commitmentNo2">Não</label>
          </Field>

          <br />
          <Field component="div" name="forthCommitment">
            <label>
              O tempo de vida de um animal é de até 15 anos ou mais. Você está
              pronto para este compromisso?
            </label>
            <br />
            <input
              type="radio"
              id="commitmentYes4"
              name="forthCommitment"
              value="Sim"
            />
            <label htmlFor="commitmentYes4">Sim</label>
            <input
              type="radio"
              id="commitmentNo4"
              name="forthCommitment"
              value="Não"
            />
            <label htmlFor="commitmentNo4">Não</label>
          </Field>
          <br />
          <Field component="div" name="fifthCommitment">
            <label>
              Todos em sua família estão de acordo com a adoção de um animal?
            </label>
            <br />
            <input
              type="radio"
              id="commitmentYes5"
              name="fifthCommitment"
              value="Sim"
            />
            <label htmlFor="commitmentYes5">Sim</label>
            <input
              type="radio"
              id="commitmentNo5"
              name="fifthCommitment"
              value="Não"
            />
            <label htmlFor="commitmentNo5">Não</label>
          </Field>
          <br />
          <Field component="div" name="thirdCommitment">
            <label>Você já teve um animal de estimação?</label>
            <br />
            <input
              type="radio"
              id="commitmentYes3"
              name="thirdCommitment"
              value="Sim"
            />
            <label htmlFor="commitmentYes3">Sim</label>
            <input
              type="radio"
              id="commitmentNo3"
              name="thirdCommitmentmit"
              value="Não"
            />
            <label htmlFor="commitmentNo3">Não</label>
          </Field>
          <div>
            <label htmlFor="field1">
              Se você já teve, o que aconteceu com ele?
            </label>
            <br />
            <Field as="textarea" name="field1" rows="2" cols="50" />
          </div>
          <br />
          <div>
            <label htmlFor="field2">
              O animal ficará solto ou preso? Onde e como?
            </label>
            <br />
            <Field as="textarea" name="field2" rows="2" cols="50" />
          </div>
          <br />
          <div>
            <label htmlFor="field3">
              O que você faria com o animal se tivesse de mudar de endereço?
            </label>
            <br />
            <Field as="textarea" name="field3" rows="2" cols="50" />
          </div>
          <br />
          <div>
            <label htmlFor="field4">
              Por que gostaria de adotar um animal?
            </label>
            <br />
            <Field as="textarea" name="field4" rows="2" cols="50" />
          </div>
          <br />

          <MyCheckbox name="acceptedTerms">
            Declaro que as informações fornecidas são verdadeiras.
          </MyCheckbox>

          <button className="btnLogin" type="submit">
            Enviar Formulário
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ApplicationForm;
