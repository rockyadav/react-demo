import React, { useState, useEffect } from "react";
import locadingImg from "../images/loading.gif";
const ProductItems = () => {
    const ImageSetting = {
        width : "250px",
        height : "250px",
    }
    const productDiv = {
        width : "30%",
        display: "inline-block"
    }
    const imgStyle = {
        marginTop: '15%',
        marginBottom: '15%'
    }
    let [productData, setProductData] = useState(null);
    let allItems = <img src={locadingImg} alt="loading image" style={imgStyle} />;
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProductData(data));
    },[]);

    if(productData){
    allItems = productData.products.map((myList) =>  
        <>
            <div style={productDiv} key={Math.random().toString}>
                <h4>{myList.title}</h4>
                <img src={myList.thumbnail} alt="product name" style={ImageSetting} />
                <p><label>Price : {myList.price}</label></p>
            </div>
        </>
    );  
}
    return (
        <>
            {allItems}
        </>
    );
}

export default ProductItems;