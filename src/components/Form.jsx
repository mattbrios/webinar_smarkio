import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 720px;
  background-color: var(--background);
  border-radius: 0.5rem;
`;

const Form = () => {

  const { handleSubmit, control } = useForm();

  const [termsChecked, setTermsChecked] = useState(false);
  const [showValidateTerms, setShowValidateTerms] = useState(false);
  
  const handleChangeTerms = () => {
    setTermsChecked(!termsChecked);
  }

  const onSubmit = async (formValues) => {
    if (!termsChecked) {
      setShowValidateTerms(true);
    }
    else {
      setShowValidateTerms(false);
      console.log("FORM VALUES", formValues);

      try {
        // const url = process.env.REACT_APP_API_URL || "https://api-sa.smark.io/v1/1d3e7dd889b4c633dd8ade8c3feccf68290a3462/lead";
        let data ={
          "lead[campaign_external_id]" : "community",
          "lead[first_name]" : formValues.name,
          "lead[email]" : formValues.mail,
          "extra[empresa]" : formValues.company
        }

        const instance = axios.create({
          baseURL: 'https://api-sa.smark.io/v1/1d3e7dd889b4c633dd8ade8c3feccf68290a3462',
          timeout: 1000,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
        
        instance.post('/lead', data).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          console.log("executou o post com sucesso?");
        }); 
      }
      catch {
        console.log("erro");
      }
    }
  }

  return (
    <FormContainer>
      <Typography variant="h6" align="center" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="Nome completo"
                  variant="outlined"
                  id="namefield"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Nome obrigatório' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="mail"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  type="email"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? "E-mail inválido" : null}
                />
              )}
              rules={{ required: 'E-mail obrigatório', pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
              register
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="company"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="Empresa"
                  variant="outlined"
                  id="companyField"
                  fullWidth
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={1} mb={1}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkTerms"
                    color="primary"
                    onChange={handleChangeTerms}
                    required={true}
                    value={!termsChecked}
                  />
                }
                label="Ao clicar nesta opção você aceita nossa Politica de Privacidade do site e nossos Termos e Condições."
                className="primary--text checkTerms"
                />
              { showValidateTerms && (
                <Typography variant="caption" style={{ color: "var(--red)" }}>
                  É necessário que aceite os termos e condições
                </Typography>
              ) }
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!termsChecked}
              fullWidth
              style={{ padding: "1rem 0" }}
            >
              Se inscrever
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default Form;