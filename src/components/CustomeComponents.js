import { Button, styled } from "@mui/material";

export const NavButton = styled(Button)(({ theme }) => ({
    color: 'black',
    '&:hover': {
        color: theme.palette.secondary.dark,
        fontSize: 'small',
        transition: 'ease-in-out .1s'
    }
}))