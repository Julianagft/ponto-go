'use client'
import { styled, Box} from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));


export default function Main({children}) {

    return (
            <Box
                component="main"
                sx={
                    {   flexGrow: 1,
                        flexShrink: 1,
                        p: 3,
                        width: '100vw',
                    }
                }
            >
            <DrawerHeader />
                {children}
            </Box>
   )
}