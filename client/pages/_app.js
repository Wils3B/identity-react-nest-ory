import {appWithTranslation} from 'next-i18next';
import '../styles/globals.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
