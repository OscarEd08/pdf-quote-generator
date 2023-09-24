import React, { createContext, useContext, useState } from "react";
// import Quote from "../types/interfaces";
import { generateRandomId, generateRandomQuoteNo } from "../utils/form";

interface Item {
  sno: number;
  desc: string;
  qty: number;
  unit_measure: string;
  unit_price: number;
}

interface Quote {
  id: string;
  quote_no: string;
  client: string;
  ruc: string;
  quote_date: string;
  items: Item[];
}

// Define una interfaz para tus datos
interface QuoteContextType {
  quote: Quote;
  setQuote: React.Dispatch<React.SetStateAction<Quote>>;
}

// Crea el contexto
const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

// Crea un proveedor personalizado para el contexto
export const QuoteProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [quote, setQuote] = useState<Quote>({
    id: generateRandomId(),
    quote_no: generateRandomQuoteNo(),
    client: "",
    ruc: "",
    quote_date: "",
    items: [],
  });

  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

// Exporta un hook personalizado para acceder al contexto
export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuoteContext debe usarse dentro de un QuoteProvider");
  }
  return context;
};
