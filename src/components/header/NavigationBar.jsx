import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


export default function NavigationBar() {
    const cartItems = useSelector((state) => state.items);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <StoreIcon/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{display: {xs: 'none', sm: 'block'}}}
                >
                    ParaShop
                </Typography>

                <Box sx={{flexGrow: 1}}/>

                <Link to={'/cart'} style={{textDecoration: 'none', color: 'white'}}>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={cartItems.items.length} color="error">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
