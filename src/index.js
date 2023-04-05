import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1';
import { BrowserRouter} from "react-router-dom";
import './components/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);

