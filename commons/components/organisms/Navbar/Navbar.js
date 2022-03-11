import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {useStyle} from "@organisms/Navbar/style";
import {AiOutlineMenu} from "react-icons/ai";

export default function Navbar() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AiOutlineMenu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}