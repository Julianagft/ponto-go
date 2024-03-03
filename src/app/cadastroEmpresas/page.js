'use client'
import React, { useState } from 'react';
import axios from 'axios';
import requests from '@/services/ApiRequest';

// BIBLIOTECA
import {OutlinedInput, InputLabel, FormControl, Typography} from '@mui/material';
import ColorButtons from '../../Components/ColorButtons';



  export default function CadastroEmpresas() {

    const API = requests.cadastroEmpresa
  
    const [formData, setFormData] = useState({
      nomeFantazia: '',
      razaoSocial: '',
      cnpj: '',
      email: '',
      telefone: '',
    });
    
    const handleInputChange = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };
  
    const handleCadastrarEmpresa = async () => {
      try {
        const response = await API(formData);
        console.log('Resposta API:', response)
        return alert('Empresa cadastrada com sucesso')
      } catch(error) {
        console.error('Erro ao enviar dados da empresa', error.message)
      }
    };
    
    return (
      <div className='w-full h-full flex flex-col justify-items-center content-center flex-wrap p-8'>

            <Typography sx={{paddingLeft: 3, fontSize:30, fontWeight:'bold'}} variant="h6" noWrap component="div">
              CADASTRAR EMPRESA 
            </Typography>
            <Typography sx={{paddingLeft: 3, fontSize:16}} color="secondary" variant="h6" noWrap component="div">
              Cadastre nova uma empresa. 
            </Typography>

            <div className='flex flex-col md:flex-row'>
              <FormControl sx={{ m: 1, width: '50%', flexShrink:1 }} variant="outlined">
                <InputLabel color="secondary" >Nome Fantazia</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="Nome Fantazia"
                  color="secondary"
                  onChange={(e) => handleInputChange('nomeFantazia', e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '50%', flexShrink:1 }} variant="outlined">
                  <InputLabel color="secondary" >Razão Social</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="Razão Social"
                    color="secondary"
                    onChange={(e) => handleInputChange('razaoSocial', e.target.value)}
                  />
                </FormControl>
            </div>

            <div className='flex w-6/12 md:w-full justify-self-center w-11/1 justify-center'>
              <FormControl sx={{ m: 1, flexShrink:1, width:'100%'}}>
                <InputLabel color="secondary" >CNPJ</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="CNPJ"
                  color="secondary"
                  onChange={(e) => handleInputChange('cnpj', e.target.value)}
                />
              </FormControl>
            </div>

            <div className='flex flex-col md:flex-row'>
              <FormControl sx={{ m: 1, width: '50%', flexShrink:1 }} variant="outlined">
                <InputLabel color="secondary" >E-mail</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="E-mail"
                  color="secondary"
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '50%', flexShrink:1 }} variant="outlined">
                  <InputLabel color="secondary" >Telefone</InputLabel>
                  <OutlinedInput
                    id="outlined-basic"
                    variant="outlined"
                    label="Telefone"
                    color="secondary"
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                  />
                </FormControl>
            </div>
            <ColorButtons label="CADASTRAR EMPRESA" onClick={handleCadastrarEmpresa} ></ColorButtons>
            
        
      </div>
    );
  }




















