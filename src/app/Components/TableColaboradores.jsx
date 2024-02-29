import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

function createData(id, name, data, hora) {
    return {id, name, data, hora};
  }

  const dataAtual = new Date()
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let diaAtual = dataAtual.getDate();

  const fullData = (diaAtual< 10 ? '0' : '') + `${diaAtual}/`+ (mesAtual < 10 ? '0' : '') + `${mesAtual}/${anoAtual}`

  const horaAtual = dataAtual.getHours();
  const minutoAtual = dataAtual.getMinutes();
  const segundoAtual = dataAtual.getSeconds();

  const horario = (horaAtual < 10 ? '0' : '') + horaAtual + ':' + (minutoAtual < 10 ? '0' : '') + minutoAtual + ':' + (segundoAtual < 10 ? '0' : '') + segundoAtual;

  const rows = [
    createData(1,'Carlos Eduardo', fullData, horario),
    createData(2,'Eva Green', fullData, horario),
    createData(3,'Pedro Pascal',fullData, horario ),
    createData(4,'João Grilo', fullData, horario),
    createData(5,'José Inocêncio', fullData, horario),
  ];


  export default function TableColaboradores() {

    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">Data</TableCell>
                    <TableCell align="right">Hora</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.data}</TableCell>
                    <TableCell align="right">{row.hora}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
  }