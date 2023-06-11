import { createTheme } from '@mui/material/styles';

const themeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#3f43b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: 'Roboto Slab',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 500,
        }
    },
};

export default createTheme(themeOptions);