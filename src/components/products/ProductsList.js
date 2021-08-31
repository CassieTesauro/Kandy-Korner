import React, { useEffect, useState } from "react"  //import react and built-in hooks

//Module Responsibility: house a function that handles the products data.  store, listen/react, render


export const ProductList = () => {
    const [products, productsFunction] = useState([]) //prepare to store the data locally.  state to be stored in products variable is initially an empty array because we're going to be fetching array type data to store in it.


    useEffect( //initial useEffect: fetch data from API; invoke productsFunction to store data 
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId") //fetch and translate the API JSON state.  Use expand to see the product type data when serving the api.  use sort to change the order.
                .then(res => res.json())
                .then((fetchedAPIProductsData) => { //make a variable to reference the fetched state
                    productsFunction(fetchedAPIProductsData) //use this function to put the state we just fetched and translated into the products variable.  Now the state we began in the useState line has changed 2 times:  from an instantiated empty array to an array with our products data.
                },
                    [] //we don't put any state in here to watch for changes because this particular use effect is just fetching some data.
                )

            return ( //code in the curly brackets is JS.  If we need to interpolate within the curly brackets, it's normal JS `${}` format.  Think: popping in and out of vanilla JS.
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
    )
}
