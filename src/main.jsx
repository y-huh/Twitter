import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenContext>
      <App />
    </TokenContext>
  </BrowserRouter>
);
