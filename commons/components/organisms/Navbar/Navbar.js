import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {useStyle} from "@organisms/Navbar/style";
import {AiOutlineMenu} from "react-icons/ai";
import NextLink from 'next/link';

export default function Navbar() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AiOutlineMenu/>
                    </IconButton>
                    <NextLink href={"/products"} passHref>
                        <Typography style={{cursor : 'pointer'}} variant="h6">
                            Products
                        </Typography>
                    </NextLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}