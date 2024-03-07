'use client'
import React, { useState } from 'react';
import requests from '../../services/ApiRequest';

import {Button, OutlinedInput, InputLabel, FormControl, TextField, Select, MenuItem, Grid, styled, Stack } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ColorButtons from '../../Components/ColorButtons';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(60%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 1,
  left: 1,
  whiteSpace: 'nowrap',
  width: 2,
});


//FUNÇÃO DA PÁGINA

export default function CadastroColaborador({ children }) {
  
  // CONFIG DE API

  const [formData, setFormData] = useState({
    email: '',
    cpf: '',
    firstName: '',
    lastName: '',
    admissionDate: '',
    birthdate: '',
    registration: '',
    pis: null,
    pointWithPicture: false,
    companyAdmissionDate: '',
    clt: true
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCadastrarColaborador = async () => {

    if (!validateFields()) { // Verifica se todos os campos obrigatórios estão preenchidos
      alert('Por favor, preencha todos os campos obrigatórios.');
      return; // Interrompe a execução se algum campo obrigatório estiver vazio
    }

    try {
      const response = await requests.cadastroColaborador(formData)
      console.log('Resposta API:', response.data);
      alert('Colaborador(a) cadastrado(a) com sucesso');
    } catch (error) {
      console.error('Erro ao enviar dados do colaborador(a)', error.message);
    }
  };

  // CONF DE VALIDAÇÃO

  const [fieldErrors, setFieldErrors] = useState({});
  
  const validateFields = () => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'registration', 'admissionDate', 'jobTitleId', 'birthdate', 'companyAdmissionDate'];
  
    requiredFields.forEach(field => {
      // Verifica se o campo está vazio, nulo ou indefinido
      if (!formData[field] || formData[field] === null || formData[field] === undefined) {
        errors[field] = true; // Marca o campo como erro se estiver vazio
      }
    });
    console.log(errors)
    setFieldErrors(errors);
    return Object.keys(errors).length === 0; // Retorna true se não houver erros
  };


  // CONFIG DE ESTILO
  const [CLT, setCLT] = React.useState('');

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: grey[50],
    color: theme.palette.getContrastText(grey[500]),
    border: `1px solid ${grey[400]}`,
    '&:hover': {
      border: `1px solid ${grey[700]}`,
      backgroundColor: grey[50]
    },
  }));

  const cPurple = purple[700]


  const handleChange = (event) => {
    setCLT(event.target.value);
  };

  return (
    <div className='w-full h-full flex flex-col justify-items-center content-center flex-wrap p-8 gap-2.5'>

      <div className='pl-4 font-bold	text-xl md:text-3xl'>
        <h1>CADASTRAR COLABORADOR</h1>
      </div>

      <div className='text-purple-800 pl-4 mt-1'>
        <h1>Cadastre novo(a) colaborador(a).</h1>
      </div>

      {/* OBS: Para criar o efeito desejado no seu componente de input com o Material-UI, onde o texto da label não é sobreposto pela borda do campo de input, você precisa assegurar que a propriedade label do OutlinedInput corresponda exatamente ao texto dentro do InputLabel. Isso permite que o Material-UI crie o "notch" (entalhe) na borda que acomoda o texto da label. */}

      {/* LINHA 01 */}

      <div className='flex flex-col md:flex-row justify-center w-full gap-2.5 shrink'>
        <div className='w-full md:w-1/2'>
          <FormControl sx={{width: '100%' }} variant="outlined">
            <InputLabel color="secondary" >E-mail</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="e-mail"
              color="secondary"
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </FormControl>
        </div>
        <div className='w-full md:w-1/2'>
          <FormControl sx={{width: '100%' }} variant="outlined">
            <InputLabel color="secondary" >CPF</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="CPF"
              color="secondary"
              onChange={(e) => handleInputChange('cpf', e.target.value)}
            />
          </FormControl>
        </div>
      </div>

      {/* LINHA 02 */}

      <div className='flex flex-col md:flex-row justify-center w-full gap-2.5 shrink'>
        <div className='w-full md:w-1/2'>
          <FormControl sx={{width: '100%' }} variant="outlined">
            <InputLabel color="secondary" >Nome*</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="nome*"
              color="secondary"
              error={fieldErrors['firstName']} 
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </FormControl>
        </div>

        <div className='w-full md:w-1/2'>
          <FormControl sx={{width: '100%' }} variant="outlined">
            <InputLabel color="secondary" >Sobrenome*</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="sobrenome*"
              color="secondary"
              error={fieldErrors['firstName']} 
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </FormControl>
        </div>
      </div>

      {/* LINHA 03 */}

      <div className='flex flex-col md:flex-row justify-center w-full gap-2.5 shrink'>
        <div className='w-full md:w-1/2'>
          <FormControl sx={{width: '100%' }} variant="outlined">
            <TextField
              variant="outlined"
              color="secondary"
              label="Data de Admissão*"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              error={fieldErrors['firstName']} 
              onChange={(e) => handleInputChange('admissionDate', e.target.value)}
            />
          </FormControl>
        </div>

        <div className='w-full md:w-1/2'>
          <FormControl sx={{width: '100%' }} variant="outlined">
            <TextField
              variant="outlined"
              color="secondary"
              label="Data de Nascimento*"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              error={fieldErrors['firstName']} 
              onChange={(e) => handleInputChange('birthdate', e.target.value)}
            />
          </FormControl>
        </div>
      </div>

      {/* LINHA 04 */}

      <div className='flex flex-col md:flex-row w-full gap-2.5'>
        <div className='w-full md:w-1/2 gap-2.5'>
          <div className='flex flex-col md:flex-row justify-between gap-2.5 mb-2.5'>
            <div className='md:w-1/2 w-5/6'>
              <FormControl sx={{width: '100%'}} variant="outlined">
                  <InputLabel color="secondary">Matrícula*</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="matricula*"
                    color="secondary"
                    error={fieldErrors['firstName']} 
                    onChange={(e) => handleInputChange('registration', e.target.value)}
                  />
                </FormControl>
            </div>
            
            <div className='md:w-1/2 w-5/6'>
              <FormControl sx={{width:'100%' }} variant="outlined">
                  <InputLabel color="secondary">PIS</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="PIS"
                    color="secondary"
                    onChange={(e) => handleInputChange('pis', e.target.value)}
                  />
                </FormControl>
            </div>
          </div>

          <div className= 'flex flex-col md:flex-row justify-between gap-2.5'>
            <div className='md:w-1/2 w-5/6'>
              <FormControl sx={{width:'100%'}} variant="outlined">
                <TextField
                  required
                  error={fieldErrors['firstName']} 
                  variant="outlined"
                  color="secondary"
                  label="Data de Início dos Pontos"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => handleInputChange('companyAdmissionDate', e.target.value)}
                />
              </FormControl>
            </div>

            <div className='md:w-1/2 w-5/6'>
              <FormControl sx={{width: '100%'}} variant="outlined">
                <InputLabel color="secondary">Turno*</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="turno*"
                  color="secondary"
                  error={fieldErrors['firstName']} 
                  onChange={(e) => handleInputChange('shiftId', e.target.value)}
                />
              </FormControl>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 gap-2.5'>
          <div className='flex flex-col md:flex-row justify-between gap-2.5 mb-2.5'>
              <div className='md:w-1/2 w-5/6'>
                <FormControl sx={{width: '100%', height:'100%' }} variant="outlined">
                  <CustomButton
                    variant="outlined"
                    size="large"
                    style={{ height: '100%', fontSize:'12px', padding:'10px', color: cPurple }}
                    component="label"
                    role={undefined}
                    onChange={(e) => handleInputChange('pointWithPicture', e.target.value)}
                    startIcon={<AttachFileIcon />}
                  >
                    Foto Colaborador
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/*"
                    />
                  </CustomButton>
                </FormControl>
              </div>

              <div className='md:w-1/2 w-5/6'>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <InputLabel color="secondary">Cargo*</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="E-mail"
                    color="secondary"
                    error={fieldErrors['firstName']} 
                    onChange={(e) => handleInputChange('jobTitleId', e.target.value)}
                  />
                </FormControl>
              </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-2.5'>
            <div className='md:w-1/2 w-5/6'>
              <FormControl sx={{width: '100%'}} variant="outlined">
                <InputLabel color="secondary">Regra de Jornada*</InputLabel>
                <OutlinedInput
                  id="outlined-textarea"
                  multiline

                  label="Regra de Jornada*"
                  color="secondary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={fieldErrors['firstName']} 
                  onChange={(e) => handleInputChange('journeyRuleId', e.target.value)}
                />
              </FormControl>  
            </div> 

            <div className='md:w-1/2 w-5/6'>
              <FormControl sx={{width: '100%' }} variant="outlined">
                <InputLabel id="demo-simple-select-label" color="secondary">É CLT?</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={CLT}
                  label="É CLT?"
                  color="secondary"
                  multiline
                  onChange={(e) => {
                    handleChange(e);
                    handleInputChange('isCLT', e.target.value);
                  }}
                >
                  <MenuItem value={10}>SIM</MenuItem>
                  <MenuItem value={20}>NÃO</MenuItem>
                </Select>
              </FormControl>
            </div>    
          </div>
        </div>
      </div>
        <Stack>
          <ColorButtons label="CADASTRAR COLABORADOR" onClick={handleCadastrarColaborador} />
        </Stack>
      {children}
    </div>
  );
}




