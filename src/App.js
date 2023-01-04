/*  React                       */
// import { useRef } from 'react';

/*  Material UI Utilities       */
import { createTheme, ThemeProvider } from '@mui/material'

/*  Material UI Elements        */
// import { Grid } from '@mui/material/Grid';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00e5ff',
            light: '#6effff',
            dark: '#00b2cc',
        },
        secondary: {
            main: '#304ffe',
            light: '#7a7cff',
            dark: '#0026ca',
        },
        error: {
            main: '#d50000',
            light: '#ff5131',
            dark: '#9b0000',
        },
        warning: {
            main: '#ff6d00',
            light: '#ff9e40',
            dark: '#c43c00',
        },
        info: {
            main: '#1a237e',
            light: '#534bae',
            dark: '#000051',
        },
        success: {
            main: '#ccff90',
            light: '#ffffc2',
            dark: '#99cc60',
        },
    },
    typography: {
        fontFamily: 'Inter',
        fontSize: 16,
    },
    spacing: {},
    breakpoints: {},
    zIndex: {},
    transitions: {},
    components: {},
})

function App() {
    return <ThemeProvider theme={theme}>Hello, World!</ThemeProvider>
}

export default App
