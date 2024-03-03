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
    fontSize: '10px', 
  },
  '@media (min-width: 601px) and (max-width: 960px)': {
    fontSize: '10px', 
  },
  '@media (min-width: 961px)': {
    fontSize: '13px', 
  },
}));

export default function ColorButtons({label, onClick}) {
  
     return (
      <div className='w-full md:w-1/2 ml-2.5' onClick={onClick}>
        <ColorButton variant="contained" size="large">
          {label}
        </ColorButton>
      </div>
        
      )
}