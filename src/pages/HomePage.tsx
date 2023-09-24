import { useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Form from "./form/Form";
import PdfPage from "./pdf/PdfPage";
import MenuResponsive from "../components/MenuResponsive";
import { Routes, Route } from "react-router-dom";
import DownloadPdf from "./pdf/DownloadPdf";
import { useQuoteContext } from "../context/QuoteContext";

const HomePage = () => {
  const { quote, setQuote } = useQuoteContext();
  // Cargar el valor de quote desde localStorage al montar el componente
  useEffect(() => {
    const storedQuote = localStorage.getItem("quote");
    if (storedQuote) {
      setQuote(JSON.parse(storedQuote));
    }
  }, [setQuote]);
  return (
    <>
      <MenuResponsive />
      <Routes>
        <Route path="/cotizacion" element={<Form />} />
        <Route
          path="/pdf"
          element={
            <PDFViewer style={{ width: "100%", height: "90vh" }}>
              <PdfPage quote={quote} />
            </PDFViewer>
          }
        />
        <Route path="/download" element={<DownloadPdf quote={quote} />} />
      </Routes>
    </>
  );
};

export default HomePage;
