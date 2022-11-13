import P from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global-Styles';
import { theme } from './theme';

export function MyThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
}

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
