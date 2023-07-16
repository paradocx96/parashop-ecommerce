import React from 'react';
import StoreIcon from "@mui/icons-material/Store";
import Toolbar from "@mui/material/Toolbar";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <Toolbar>
                    <div className="footer-logo">
                        <StoreIcon/>
                    </div>
                    <div className="footer-title">ParaShop</div>
                    <div className="footer-links"></div>
                </Toolbar>
            </div>
        </div>
    );
}

export default Footer;
