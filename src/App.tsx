import { QuoteProvider } from "./context/QuoteContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </QuoteProvider>
  );
}

export default App;
