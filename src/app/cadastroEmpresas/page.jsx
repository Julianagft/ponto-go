'use client'
import React, { useState } from 'react';
import requests from '@/services/ApiRequest';

// BIBLIOTECA
import {OutlinedInput, InputLabel, FormControl, Typography} from '@mui/material';
import ColorButtons from '../../Components/ColorButtons';



export default function CadastroEmpresas() {
  

  //CONF DE API  
    const [formData, setFormData] = useState({
      name: '',
      razaoSocial: '',
      cnpj: '',
      email: '',
      phone: '',
    });
    
    const handleInputChange = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };
  
    const handleCadastrarEmpresa = async () => {
      try {
        const response = await requests.cadastroEmpresa(formData)
        console.log('Resposta API:', response.data);
        alert('Empresa cadastrada com sucesso');
      } catch (error) {
        console.error('Erro ao enviar dados da empresa', error.message);
      }
    };
    
    return (
      <div className='w-full h-full flex flex-col justify-items-center content-center flex-wrap p-8'>

            <div className='pl-4 font-bold	text-2xl md:text-3xl'>
              <h1>CADASTRAR EMPRESA</h1>
            </div>

            <div className='text-purple-800 pl-4 mt-1'>
              <h1>Cadastre nova uma empresa.</h1>
            </div>
           
            <div className='flex flex-col md:flex-row'>
              <FormControl sx={{ m: 1, width: '50%', flexShrink:1 }} variant="outlined">
                <InputLabel color="secondary" >Nome Fantasia</InputLabel>
                <OutlinedInput
                  id="outlined-basic"
                  variant="outlined"
                  label="Nome Fantasia"
                  color="secondary"
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </FormControl>
            </div>
            <ColorButtons label="CADASTRAR EMPRESA" onClick={handleCadastrarEmpresa} ></ColorButtons> 
      </div>
    );
  }




















