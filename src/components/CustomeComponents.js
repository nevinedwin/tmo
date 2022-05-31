import { alpha, Button, InputBase, styled, TextField } from "@mui/material";

export const NavButton = styled(Button)(({ theme }) => ({
    color: 'black',
    width: '23px',
    '&:hover': {
        color: theme.palette.secondary.dark,
        fontSize: 'small',
        transition: 'ease-in-out .1s'
    }
}))

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.light,
    border: `.5px solid ${theme.palette.primary.dark}`,
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.dark}`
    },
    '&:focus': {
        border: `2px solid ${theme.palette.primary.dark}`
    },
    marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(3),
    //     width: 'auto',
    // },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const LoginTextField = styled(TextField)(({ }) => ({
    color: 'white',
    input: {
        color: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&:hover fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        'input': {
            color: 'white'
        }
    },
}))
