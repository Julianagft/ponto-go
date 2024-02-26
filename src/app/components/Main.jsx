import { styled, useTheme } from '@mui/material/styles';
import { useState } from "react";



import Box from '@mui/material/Box';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));


export default function Main({children}) {
    
    const [content, setContent] = useState(children)
      
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
            
            {content}           
        </Box>
    
    )
}