import React from 'react';
import {useSelector} from "react-redux";
import {productSelector} from "../../state/selectors/productSelector";
import Product from "./Product";
import {Grid} from "@mui/material";

// const DISPLAY_ITEMS = 9;

function Products() {
    const products = useSelector(productSelector);

    // const [visibleItems, setVisibleItems] = React.useState(DISPLAY_ITEMS);
    // const itemsRendered = products?.slice(0, visibleItems);

    return (
        !!products?.length && (
            <div>
                <Grid container spacing={2} sx={{mb: 5}}>
                    {
                        products?.map((prod) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={prod.id}>
                                <Product key={prod.id} product={prod}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    )
}

export default Products;
