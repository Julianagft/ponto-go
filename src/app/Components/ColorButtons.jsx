import {Button, styled} from '@mui/material';
import {purple} from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  marginTop: '10px',
  padding: '10px',
  width: '50%',
  color: theme.palette.getContrastText(purple[600]),
  backgroundColor: purple[600],
  '&:hover': {
    backgroundColor: purple[800],
  },
  '@media (max-width: 600px)': {
    fontSize: '10px', // Define o tamanho da fonte para telas menores que 600 pixels
  },
  '@media (min-width: 601px) and (max-width: 960px)': {
    fontSize: '10px', // Define o tamanho da fonte para telas entre 601 e 960 pixels
  },
  '@media (min-width: 961px)': {
    fontSize: '13px', // Define o tamanho da fonte para telas maiores que 960 pixels
  },
}));

export default function ColorButtons({label}) {
  
     return (
      <div className='w-full md:w-1/2 ml-2.5'>
        <ColorButton variant="contained" size="large">
          {label}
        </ColorButton>
      </div>
        
      )
}