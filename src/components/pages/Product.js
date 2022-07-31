import React from "react";
import ProductItems from "./ProductItems";
const Product = () => {    
    return (
        <>
            <div className="feature" id="content">
				<div id="content-inner">
					<main id="contentbar">
						<div className="article">
                            <h1 className="center">Product Data</h1>
						</div>
                        <ProductItems />
					</main>					
					<div className="clr"></div>
				</div>
			</div>
        </>
    );
}

export default Product;