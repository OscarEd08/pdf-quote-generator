import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Quote from "../../types/interfaces";

const DownloadPdf = ({quote}: Quote) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <PDFDownloadLink
          document={<PdfPage quote={quote} />}
          fileName="COTIZACION.pdf"
        >
          <Button>Descargar PDF</Button>
        </PDFDownloadLink>
      </Grid>
    </Grid>
  );
};

export default DownloadPdf;
