import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Home = () => {
    const rows=[{name:'Miya',age:20,place:'TVM'},{name:'Tiya',age:21,place:'Kochi'},
        {name:'Giya',age:33,place:'TVM'}
    ]
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Age</TableCell>
          <TableCell align="right">Place</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.age}</TableCell>
            <TableCell align="right">{row.place}</TableCell>
         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home