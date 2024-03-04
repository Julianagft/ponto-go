'use client'
import React, { useState } from 'react';
import requests from '@/services/ApiRequest';

import { Box, Button, OutlinedInput, InputLabel, FormControl, TextField, Select, MenuItem, Typography, Grid, styled, Stack} from '@mui/material';
import {grey} from '@mui/material/colors';
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
//CONFIG DE API

const [formData, setFormData] = useState({
  email: '',
  cpf: '',
  firstName: '',
  lastName: '',
  admissionDate: '',
  birthdate: '',
  registration:'',
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

const handleCadastrarEmpresa = async () => {
  try {
    const response = await requests.cadastroColaborador(formData)
    console.log('Resposta API:', response.data);
    alert('Colaborador(a) cadastrado(a) com sucesso');
  } catch (error) {
    console.error('Erro ao enviar dados do colaborador(a)', error.message);
  }
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

  
  const handleChange = (event) => {
    setCLT(event.target.value);
  };

  return (
    <div className='w-full p-2.5'>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', flexWrap: 'wrap', minWidth: '90vw', minHeight: '100vh' }}>
        <Typography sx={{ paddingLeft: 3, fontSize: 30, fontWeight: 'bold' }} variant="h6" noWrap component="div">
          CADASTRAR COLABORADOR
        </Typography>
        <Typography sx={{ paddingLeft: 3, fontSize: 16 }} color="secondary" variant="h6" noWrap component="div">
          Cadastre novo colaborador.
        </Typography>

        {/* OBS: Para criar o efeito desejado no seu componente de input com o Material-UI, onde o texto da label não é sobreposto pela borda do campo de input, você precisa assegurar que a propriedade label do OutlinedInput corresponda exatamente ao texto dentro do InputLabel. Isso permite que o Material-UI crie o "notch" (entalhe) na borda que acomoda o texto da label. */}

        <div className='flex flex-col justify-center md:flex-row w-ful'>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >E-mail</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="e-mail"
              color="secondary"
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
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

        <div className='flex flex-col md:flex-row w-full'>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >Nome*</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="nome*"
              color="secondary"
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >Sobrenome*</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="sobrenome*"
              color="secondary"
              onChange={(e) => handleInputChange('lasttName', e.target.value)}
            />
          </FormControl>
        </div>

        <div className='flex flex-col md:flex-row w-full'>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <TextField 
              variant="outlined"
              color="secondary"
              label="Data de Admissão*" 
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleInputChange('admissionDate', e.target.value)}
           />              
          </FormControl>
          
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <TextField 
                variant="outlined"
                color="secondary"
                label="Data de Nascimento*" 
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              onChange={(e) => handleInputChange('birthdate', e.target.value)}
            />     
          </FormControl>
        </div>          
  
          <Box sx={{ width: '100%', sm:{width: '50%'}}}>
            {/* Primeira Linha */}
            <Grid container rowSpacing={1} columnSpacing={{xs:2, md: 3 }}>
              {/* Coluna 1 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl  sx={{ m: 1, width: '80%', xs: {width:'50%'} }} variant="outlined">
                  <InputLabel color="secondary">Matrícula*</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="matricula*"
                    color="secondary"
                    onChange={(e) => handleInputChange('registration', e.target.value)}
                  />
                </FormControl>
              </Grid>
  
              {/* Coluna 2 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                  <InputLabel color="secondary">PIS</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="PIS"
                    color="secondary"
                    onChange={(e) => handleInputChange('pis', e.target.value)}
                  />
                </FormControl>
              </Grid>
  
              {/* Coluna 3 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                <CustomButton
                  variant="outlined"
                  size="large"
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
              </Grid>
  
              {/* Coluna 4 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                  <InputLabel color="secondary">Cargo*</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="E-mail"
                    color="secondary"
                    onChange={(e) => handleInputChange('jobTitleId', e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
  
            {/* Segunda Linha */}
            <Grid container rowSpacing={1} columnSpacing={{sm: 2, md: 3 }}>
            {/* Coluna 5 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                  <TextField 
                    required
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
              </Grid>
  
              {/* Coluna 6 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                  <InputLabel color="secondary">Turno*</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="turno*"
                    color="secondary"
                    onChange={(e) => handleInputChange('shiftId', e.target.value)}
                  />
                </FormControl>
              </Grid>
  
              {/* Coluna 7*/}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%', sm:{ width:'10%'}}} variant="outlined">
                  <InputLabel color="secondary">Regra de Jornada*</InputLabel>
                  <OutlinedInput
                    id="outlined-textarea"
                    multiline
                    
                    label="Regra de Jornada*"
                    color="secondary"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleInputChange('journeyRuleId', e.target.value)}
                  />
                </FormControl>
              </Grid>

              {/* Coluna 8*/}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
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
              </Grid>
            </Grid>
            <Stack>
              <ColorButtons label="CADASTRAR COLABORADOR" onClick={handleCadastrarEmpresa} />
            </Stack>
            </Box>
            
        {children}
      </Box>
    </div>
  );
}




