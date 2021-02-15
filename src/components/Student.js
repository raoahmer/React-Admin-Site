import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from './AppBar';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
    marginTop:100, 
  },
 
});

function createData(name, rollNo, Email, Password) {
  return { name, rollNo, Email, Password };
}

const rows = [
  createData('Ahmar', 'bitf17m056', 'bitf17m056@gmail.com', 'Ahmar56', ),
  createData('Osama', 'bitf17m022', 'bitf17m022@gmail.com', 'DilNhiDuaChahya', ),
  createData('Ahsan', 'bitf17m001', 'bitf17m001@gmail.com', 'Ahsan001', ),
  createData('Khadija', 'bitf17a014', 'bitf17m014@gmail.com', 'NeeliNeeliRoshni', ),
 
];

export default function Student() {
  const classes = useStyles();

  return (
      <>
     <AppBar/>
    <TableContainer component={Paper}>
      <Table style={{
        width: '750px',
        height: '200px',
        marginLeft:'auto',
        marginRight:'auto',
        border:'2px solid black'
      }} className={classes.table} aria-label="simple table">
        <TableHead style={{
        backgroundColor: '#3f51b5',
      
      }}>
          <TableRow>
            <TableCell >Student Name</TableCell>
            <TableCell align="right">Student Roll No</TableCell>
            <TableCell align="right">Student ID</TableCell>
            <TableCell align="right">Password</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.rollNo}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Password}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
