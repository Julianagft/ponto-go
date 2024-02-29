'use client'
import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 160 },
    { field: 'age', headerName: 'Idade', width:90, type: 'number' },
    {
      field: 'tel',
      type: 'tel',
      headerName: 'Telefone',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, name: 'Jonh Snow', age: 35, tel:'(83) 2334-0418' },
    { id: 2, name: 'Daenerys Targaryen', age: 25, tel:'(93) 3659-4304'},
    { id: 3, name: 'Cercei Lannister', age: 45, tel:'(27) 3234-7211' },
    { id: 4, name: 'Arya Stark', age: 16, tel:'(84) 3926-2658' },
    { id: 5, name: 'Sansa Stark', age: 20, tel:'(84) 3035-5361' },
    { id: 6, name: 'Melisandre', age: 1000, tel:'(21) 2267-0546' },
    { id: 7, name: 'Tyrion Lanister', age: 43, tel: '(27) 3487-3816' },
    { id: 8, name: 'Sandor Clegane', age: 50, tel: '(49) 2635-0666'},
    { id: 9, name: 'Margaery Tyrell', age: 27, tel:'(61) 2463-1987'},
  ];
  
  export default function TableEquipe() {
    return (
      <div className='mt-4' style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    );
  }

