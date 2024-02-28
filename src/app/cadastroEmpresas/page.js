  'use client'
  import * as React from 'react';
  import { Box, OutlinedInput, InputLabel, FormControl, Typography } from '@mui/material';


  export default function CadastroEmpresas({children}) {
    
    return (
      <div className='w-full p-2.5'>
        <Box sx={{ display: 'flex', flexDirection: 'column',justifyItems: 'center', flexWrap: 'wrap', minWidth: '90vw', minHeight: '100vh' }}>
            <Typography sx={{paddingLeft: 3, fontSize:30, fontWeight:'bold'}} variant="h6" noWrap component="div">
              CADASTRAR EMPRESA 
            </Typography>
            <Typography sx={{paddingLeft: 3, fontSize:16}} color="secondary" variant="h6" noWrap component="div">
              Cadastre nova uma empresa. 
            </Typography>
            <div className='flex flex-col md:flex-row'>
              <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                <InputLabel color="secondary" >Nome Fantazia</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="Nome Fantazia"
                  color="secondary"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                  <InputLabel color="secondary" >Razão Social</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="Razão Social"
                    color="secondary"
                  />
                </FormControl>
            </div>

            <div className='flex w-6/12 md:w-full'>
              <FormControl fullWidth sx={{ m: 1, width:'100%' }}>
                <InputLabel color="secondary" >CNPJ</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="CNPJ"
                  color="secondary"
                />
              </FormControl>
            </div>

            <div className='flex flex-col md:flex-row'>
              <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                <InputLabel color="secondary" >E-mail</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="E-mail"
                  color="secondary"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                  <InputLabel color="secondary" >Telefone</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="Telefone"
                    color="secondary"
                  />
                </FormControl>
            </div>
            
            {children}
          </Box>
      </div>
    );
  }




















