interface Quote {
  quote: {
    id: string;
    quote_no: string;    
    client: string;
    ruc: string;
    quote_date: string;
    items: {
      sno: number;
      desc: string;
      qty: number;
      unit_measure: string;
      unit_price: number;            
    }[];
  };
}

export default Quote;
