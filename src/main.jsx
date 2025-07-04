import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import {FirebaseProvider} from "./context/firebase"
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
 <FirebaseProvider>
  
   <AuthProvider><ThemeProvider>
     <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </ThemeProvider></AuthProvider>
   
 </FirebaseProvider>
 
);
