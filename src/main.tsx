import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyles } from './styles/Global-Styles';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { App } from './templates/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
      <GlobalStyles />
    </MyThemeProvider>
  </React.StrictMode>,
);
