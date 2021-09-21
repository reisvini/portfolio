import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import i18n from './i18n';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='dark' />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
