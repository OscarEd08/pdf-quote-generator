import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Quote from "../../../types/interfaces";

interface Items {
  sno: number;
  desc: string;
  qty: number;
  unit_measure: string;
  unit_price: number;
}

const TableForm = ({ items }: { items: Quote["quote"]["items"] }) => {
  return (
    <TableContainer style={{ padding: 20, marginBottom: 80 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>ITEM</TableCell>
            <TableCell>DESC</TableCell>
            <TableCell>CANT.</TableCell>
            <TableCell>U. MEDIDA</TableCell>
            <TableCell>P. UNIT</TableCell>
            <TableCell>TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item: Items) => (
            <TableRow
              key={item.sno}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.sno}
              </TableCell>
              <TableCell>{item.desc}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell>{item.unit_measure}</TableCell>
              <TableCell>{item.unit_price}</TableCell>
              <TableCell>{item.qty * item.unit_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableForm;
