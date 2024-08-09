import React, { FC } from "react";
import Box from '@mui/material/Box';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from '@mui/material/TableSortLabel';

interface HeadCell {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

type Order = 'asc' | 'desc';

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const headCells: HeadCell[] = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Название",
  },
  {
    id: "lang",
    numeric: false,
    disablePadding: false,
    label: "Язык",
  },
  {
    id: "forks",
    numeric: true,
    disablePadding: false,
    label: "Число форков",
  },
  {
    id: "stars",
    numeric: true,
    disablePadding: false,
    label: "Число форков",
  },
  {
    id: "update_date",
    numeric: true,
    disablePadding: false,
    label: "Дата обновления",
  },
];

const ResultsTable: FC = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
               <TableCell
               key={headCell.id}
               align={headCell.numeric ? 'right' : 'left'}
               padding={headCell.disablePadding ? 'none' : 'normal'}
               sortDirection={orderBy === headCell.id ? order : false}
             >
               <TableSortLabel
                 active={orderBy === headCell.id}
                 direction={orderBy === headCell.id ? order : 'asc'}
                 onClick={createSortHandler(headCell.id)}
               >
                 {headCell.label}
                 {orderBy === headCell.id ? (
                   <Box component="span" sx={visuallyHidden}>
                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                   </Box>
                 ) : null}
               </TableSortLabel>
             </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
