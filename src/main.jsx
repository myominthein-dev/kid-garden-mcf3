import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { LanguageProvider } from "./features/public/contexts/LanguageContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
    <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
