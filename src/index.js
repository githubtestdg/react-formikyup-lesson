import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {AuthProdiver} from "./context/AuthContext";
import './tailwind.css'

const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
      <AuthProdiver>
        <App />
      </AuthProdiver>
  </BrowserRouter>
);
