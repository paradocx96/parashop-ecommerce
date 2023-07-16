import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {cartItemsCountSelector} from "../../state/selectors/cartSelector";


export default function NavigationBar() {
    const cartItems = useSelector(cartItemsCountSelector);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
                    <StoreIcon/>
                </Link>
                <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
                    <div className="nav-banner">ParaShop</div>
                </Link>

                <Box sx={{flexGrow: 1}}/>

                <Link to={'/cart'} style={{textDecoration: 'none', color: 'white'}}>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={cartItems} color="error">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
