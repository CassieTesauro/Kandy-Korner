import React, { useEffect, useState } from "react"  //import react and built-in hooks

//Module Responsibility: house a function that handles the products data.  store, listen/react, render


export const ProductList = () => {
    const [products, productsFunction] = useState([]) //prepare to store the data locally.  state is initially an empty array.  


    useEffect( //initial useEffect to fetch the data and store it 
        () => {
            fetch("http://localhost:8088/products?_expand=productType") //fetch and translate the API JSON state
                .then(res => res.json())
                .then((fetchedAPIProductsData) => { 
                    productsFunction(fetchedAPIProductsData) //use the function to put the state into the locations variable to store locally
                })
            },
        []
    )

    return ( //code in the curly brackets is JS
        <>
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`}>
                                    <ul>{product.name}
                                        <li>{product.id}</li>
                                        <li>{product.price}</li>
                                        <li>{product.productType.type}</li>
                                </ul>
                               </div>
                    }
                )
            }
        </>
    )



}