import {Box} from '@mui/material';
import TableEquipe from '../../Components/TableEquipe';


export default function GerenciarEquipe() {
    
    return (
        <Box
          sx={{width:'100vw'}}
        >
          <div className='pl-4 font-bold text-2xl md:text-3xl'>
            <h1>GERENCIAR EQUIPE</h1>
          </div>

          <div className='text-purple-800 pl-4 mt-1'>
            <h1>Gerencie os Membros da Equipe.</h1>
          </div>   

        <TableEquipe />
        
        </Box>
    )
}