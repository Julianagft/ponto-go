'use client'
import * as React from 'react';
import { useState } from "react";

// BIBLIOTECA
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';


export default function BasicTextFields({children}) {

    const [pageContent, setPageContent] = useState(children)

  return (
    
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Outlined" variant="outlined"  />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            
        </Box>

    
  );
}