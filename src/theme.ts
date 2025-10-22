import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily:
      'Khula, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: theme => ({
        html: { fontFamily: theme.typography.fontFamily },
        body: { fontFamily: theme.typography.fontFamily },
        '#root': { fontFamily: theme.typography.fontFamily },
        // ensure native elements inherit (and not get stuck on UA defaults)
        '*': { fontFamily: 'inherit' },
        'h1,h2,h3,h4,h5,h6,p,a,li,button,input,textarea,code,pre,label': {
          fontFamily: 'inherit',
        },
      }),
    },
  },
});
