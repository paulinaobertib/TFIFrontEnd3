import React, { useState, useContext } from 'react'
import { useNavigate} from "react-router-dom";
import { NewContext } from '../Components/utils/Context';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { FormContainer, Container, Input, Title, Error} from './../styles/StyledComponents';

const inputs = [
    { id: 1, label: "Email", placeholder: "Ingresa tu email: ", name: "email" },
    { id: 2, label: "Password", placeholder: "Ingresa tu password: ", name: "password" }
]

const Login = ({ handleFetchValues }) => {

    const navigate = useNavigate();

    const getInitialValues = () => ({
        email: "",
        password: ""
      });
    
      const getValidationSchema = () => (
        Yup.lazy(() =>
          Yup.object().shape({
            email: Yup.string().email("Por favor, el email debe ser valido.❣️")
              .required("Por favor, completa.❣️"),
            password: Yup.string()
              .required("Por favor, completa.❣️"),
          })
        )
      )
  
      const onSubmit = (values) => {
          console.log(values);
          handleFetchValues(values);
          navigate("/home");
        };
      
        const { values, setFieldValue, errors, handleSubmit } = useFormik({
          initialValues: getInitialValues(),
          validationSchema: getValidationSchema(),
          validateOnChange: false,
          validateOnBlur: false,
          onSubmit
        })
      
      return (
          <>
              <Title>Login</Title>
              <FormContainer from="contact">
                  <form id="contact-form" onSubmit={handleSubmit}>
                  {
                    inputs.map(field => (
                      <Container key={field.id}>
                        <label>{field.label}</label>
                        <Input
                          name={field.name}
                          placeholder={field.placeholder}
                          value={values[field.name]}
                          onChange={(e) => setFieldValue(field.name, e.target.value)}
                        />
                        {
                          errors[field.name] && (
                            <Error>{errors[field.name]}</Error>
                          )
                        }
                      </Container>
                    ))
                  }
                  </form>
                  <Container content="row">
                      <button className='buttonContact' name='sbmt' form="contact-form" btn="submit" type="submit">SUBMIT</button>
                  </Container>
              </FormContainer>
          </>
      )
}

export default Login;