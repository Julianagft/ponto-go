import {Box, Typography} from '@mui/material';
import TableEquipe from '../../Components/TableEquipe';


export default function GerenciarEquipe() {
    
    return (
        <Box
          sx={{width:'100vw'}}
        >
        <Typography sx={{paddingLeft: 3, fontSize:30, fontWeight:'bold'}} variant="h6" noWrap component="div">
                GERENCIAR EQUIPE 
        </Typography>
        <Typography sx={{paddingLeft: 3, fontSize:16}} color="secondary" variant="h6" noWrap component="div">
                Gerencie os Membros da Equipe. 
        </Typography>

        <TableEquipe />
        
        </Box>
    )
}