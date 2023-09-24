import express from "express";
import axios from "axios";

const app = express();
const port = 3000; // Puertos pueden variar

// Middleware para permitir solicitudes JSON
app.use(express.json());

// Ruta para consultar RUC
app.get("/consultar-ruc/:ruc", async (req, res) => {
  try {
    const ruc = req.params.ruc;
    const apiKey = import.meta.env.VITE_RUC_KEY;

    const response = await axios.get(
      `https://api.apis.net.pe/v1/ruc?numero=${ruc}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al consultar RUC" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
