'use client'
import * as React from 'react';

import { Box, Button, OutlinedInput, InputLabel, FormControl, TextField, Select, MenuItem, Typography, Grid, styled } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

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

  const [CLT, setCLT] = React.useState('');

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

        <div className='flex flex-col justify-center md:flex-row w-ful'>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >E-mail</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="Nome Fantazia"
              color="secondary"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >CPF</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="Razão Social"
              color="secondary"
            />
          </FormControl>
        </div>

        <div className='flex flex-col md:flex-row w-full'>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >Nome*</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="E-mail"
              color="secondary"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
            <InputLabel color="secondary" >Sobrenome*</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              variant="outlined"
              label="Telefone"
              color="secondary"
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
                    label="E-mail"
                    color="secondary"
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
                    label="E-mail"
                    color="secondary"
                  />
                </FormControl>
              </Grid>
  
              {/* Coluna 3 */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                <Button
                  variant="outlined"
                  color= "secondary"
                  size="large"
                  component="label"
                  role={undefined}
                  startIcon={<AttachFileIcon />}
                >
                  Foto Colaborador
                  <VisuallyHiddenInput 
                    type="file"  
                    accept="image/*"
                  />
                </Button>
                      
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
                    label="Data de Início dos Pontos*" 
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    label="E-mail"
                    color="secondary"
                  />
                </FormControl>
              </Grid>
  
              {/* Coluna 7*/}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%', sm:{ width:'10%'}}} variant="outlined">
                  <InputLabel color="secondary">Regra de Jornada*</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="E-mail"
                    color="secondary"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormControl>
              </Grid>

              {/* Coluna 8*/}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl sx={{ m: 1, width:'80%'}} variant="outlined">
                <InputLabel id="demo-simple-select-label">É CLT?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={CLT}
                    label="CLT"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>SIM</MenuItem>
                    <MenuItem value={20}>NÃO</MenuItem>
                  </Select>     
                </FormControl>
              </Grid>
            </Grid>
            </Box>
        {children}
      </Box>
    </div>
  );
}




