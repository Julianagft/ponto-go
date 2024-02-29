'use client'
import * as React from 'react';

import { Box } from '@mui/material';
import {Typography, FormControl, TextField} from '@mui/material';
import ColorButtons from '../Components/ColorButtons';
import TableColaboradores from '../Components/TableColaboradores';



export default function controleDePonto() {
   
   
    return (
    
        <Box>
          <Box>
            <Typography sx={{paddingLeft: 3, fontSize:30, fontWeight:'bold'}} variant="h6" noWrap component="div">
                CONTROLE DE PONTO 
              </Typography>
              <Typography sx={{paddingLeft: 3, fontSize:16}} color="secondary" variant="h6" noWrap component="div">
                Busque um registro de ponto. 
              </Typography>
              <div className='flex flex-col md:flex-row'>
                <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
                  <TextField 
                      variant="outlined"
                      color="secondary"
                      label="Data Inicial" 
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
                      label="Data Final*" 
                      type="date"
                      InputLabelProps={{
                          shrink: true,
                      }}
                  />     
                </FormControl>   
              </div>

                <ColorButtons label= "BUSCAR REGISTRO DE PONTO" />
          </Box>
            
          <Box>
              <div className='mt-6'>
                <Typography sx={{paddingLeft: 3, fontSize:20, marginTop:'10px', fontWeight:'bold'}}  variant="h6" noWrap component="div">
                Lista de Colaboradores
                </Typography>
              </div>
              
              <div className='mt-4'>
                <TableColaboradores />
              </div>

          </Box>
           
        </Box>

    )
}