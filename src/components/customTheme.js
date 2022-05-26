import { createTheme } from "@mui/material";
import { blue, blueGrey, grey, red } from "@mui/material/colors";

export const customeTheme = createTheme({
    typography: {
        fontFamily: 'Ubuntu'
    },
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#2A2550',
        },
        info: {
            main: '#EEEEEE'
        },

    },

})