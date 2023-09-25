import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "./chakra.config";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={chakraTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
);
