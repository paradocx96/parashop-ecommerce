import * as React from 'react';
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
        <div className="navbar">
            <div className="navbar-container">
                <Toolbar>
                    <Box sx={{flexGrow: 1}}/>

                    <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                        <StoreIcon/>
                    </Link>
                    <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                        <div className="navbar-banner">ParaShop</div>
                    </Link>

                    <Box sx={{flexGrow: 1}}/>

                    <Link to={'/cart'} style={{textDecoration: 'none', color: 'black'}}>
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
            </div>
        </div>
    );
}
