import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import TableForm from "./components/TableForm";
import { useQuoteContext } from "../../context/QuoteContext";
import { formatDate } from "../../utils/form";

interface Item {
  sno: number;
  desc: string;
  qty: number;
  unit_measure: string;
  unit_price: number;
}

const Form = () => {
  const { quote, setQuote } = useQuoteContext();
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [qty, setQty] = useState("");
  const [unitMeasure, setUnitMeasure] = useState("UND");
  const [unitPrice, setUnitPrice] = useState("");

  // const handleRucChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const rucValue = event.target.value;
  //   setQuote({ ...quote, ruc: rucValue });
  // };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setDate(formatDate(dateValue));
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const descValue = event.target.value;
    setDesc(descValue);
  };

  const handleQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const qtyValue = event.target.value;
    setQty(qtyValue);
  };

  const handleUnitMeasureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const unitMeasureValue = event.target.value.toUpperCase();
    setUnitMeasure(unitMeasureValue);
  };

  const handleUnitPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const unitPriceValue = event.target.value;
    setUnitPrice(unitPriceValue);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Realiza la llamada a la API para obtener el nombre del cliente
    // const clientName = await fetchClientData(quote.ruc);
    // setQuote({ ...quote, client: clientName });

    const newItem: Item = {
      sno: quote.items.length + 1,
      desc: desc,
      qty: parseFloat(qty),
      unit_measure: unitMeasure,
      unit_price: parseFloat(unitPrice),
    };

    setQuote({ ...quote, quote_date: date, items: [...quote.items, newItem] });
    localStorage.setItem(
      "quote",
      JSON.stringify({
        ...quote,
        quote_date: date,
        items: [...quote.items, newItem],
      })
    );

    // Limpia los campos del formulario
    setDesc("");
    setQty("");
    setUnitMeasure("UND");
    setUnitPrice("");
  };

  const cleanForm = () => {
    localStorage.removeItem("quote");
    setQuote({
      id: "",
      quote_no: "",
      client: "",
      ruc: "",
      quote_date: "",
      items: [],
    });
    setDesc("");
    setQty("");
    setUnitMeasure("UND");
    setUnitPrice("");
  };

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Generar Cotización
      </Typography>
      <Grid container spacing={0} direction="column" alignItems="center">
        <Grid item xs={3}>
          <form
            autoComplete="off"
            style={{ padding: 20 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="RUC"
              sx={{ mb: 3 }}
              fullWidth
              // onChange={handleRucChange}
            />
            <TextField
              type="date"
              required
              sx={{ mb: 3 }}
              fullWidth
              onChange={handleDateChange}
            />
            <TextField
              label="Producto"
              name="desc"
              required
              sx={{ mb: 3 }}
              fullWidth
              multiline
              value={desc}
              onChange={handleDescChange}
            />
            <TextField
              label="Cantidad"
              type="number"
              name="qty"
              required
              sx={{ mb: 3 }}
              fullWidth
              value={qty}
              onChange={handleQtyChange}
            />
            <TextField
              label="Unidad de medida"
              name="unit_measure"
              required
              sx={{ mb: 3 }}
              fullWidth
              value={unitMeasure}
              onChange={handleUnitMeasureChange}
            />
            <TextField
              label="Precio Unitario"
              type="number"
              name="unit_price"
              required
              sx={{ mb: 3 }}
              fullWidth
              value={unitPrice}
              onChange={handleUnitPriceChange}
            />
            <Button type="submit">Agregar</Button>
            <Button onClick={cleanForm}>Limpiar</Button>
          </form>
        </Grid>
      </Grid>
      <TableForm items={quote.items} />
    </>
  );
};

export default Form;
