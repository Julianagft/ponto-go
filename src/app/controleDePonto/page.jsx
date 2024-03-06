'use client'

import React, { useEffect, useState } from 'react';

// BIBLIOTECA
import { Box, FormControl, TextField } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// COMPONENTES
import ColorButtons from '../../Components/ColorButtons';
import TableColaboradores from '../../Components/TableColaboradores';
import requests from '@/services/ApiRequest';
import { obterDataHoraAtual } from '@/services/obterDataHoraAtual';

// FUNÇÃO DA PÁGINA
export default function controleDePonto() {

  const [initialDate, setInitialDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const handleCapturaDePonto = async () => {
    try {
      const response = await requests.capturaDePonto({
        initialDate,
        endDate,
      });

      setApiResponse(response.data);

    } catch (error) {
      console.error('Erro ao filtrar os pontos registrados.', error.message);
    }
  };

  // CONF DA TABLE

  const dataHoraAtual = obterDataHoraAtual();

  const [rows, setRows] = useState([]);

  const updateTableRows = () => {
    if (apiResponse) {
      // Estrutura da resposta da API
      const apiData = apiResponse.map((item) => ({
        id: item.id, // Supondo que existe um campo 'id' na resposta da API
        date: item.date,
        device: item.userData.device,
        operatingSystem: item.userData.operatingSystem,
      }));

      setRows(apiData);
    }
  };

  useEffect(() => {

    updateTableRows();

  }, [apiResponse])


  return (
    <div className='w-full h-full flex flex-col flex-wrap p-8 gap-2.5'>
      <div>
        <div className='pl-4 font-bold text-xl md:text-3xl'>
          <h1>CONTROLE DE PONTO</h1>
        </div>
        <div className='text-purple-800 pl-4 my-3'>
          <h1>Busque um registro de ponto.</h1>
        </div>

        <div className='flex flex-col md:flex-row justify-center w-full gap-4 shrink mb-3'> 
          <div className='w-full md:w-1/2'>
            <FormControl sx={{width: '100%' }} variant="outlined">
              <TextField
                variant="outlined"
                color="secondary"
                label="Data Inicial"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setInitialDate(e.target.value)}
              />  
            </FormControl>
          </div>
          
          <div className='w-full md:w-1/2'>
            <FormControl sx={{width: '100%' }} variant="outlined">
              <TextField
                variant="outlined"
                color="secondary"
                label="Data Final*"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
        <ColorButtons label="BUSCAR REGISTRO DE PONTO" onClick={handleCapturaDePonto} />
      </div>
      <div>

        <div className='mt-6'>
          <div className='pl-4 font-medium md:text-3xl'>
            <h2 className='text-2xl'>Registro de Ponto</h2>
          </div>
        </div>

        <div className='w-full mt-4 bg-pink-700'>
          <TableContainer sx={{ width: '100%' }} component={Paper}>
            <Table sx={{ width: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>Data da Pesquisa</TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold', color: '#6A1B9A' }}>Ponto Criado</TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold', color: '#6A1B9A' }}>Dispositivo</TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold', color: '#6A1B9A' }}>Sistema Operacional</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{dataHoraAtual}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.device}</TableCell>
                    <TableCell align="right">{row.operatingSystem}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </div>
  )
}