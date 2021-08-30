import React from "react" //  Allows us to use React library features
import { LocationList } from "./locations/LocationList" //for LocationList function
import { ProductList } from "./products/ProductsList"

//Module Responsibility: One function that determines the layout of the site

export const KandyKorner = () => {
    return(
        <>
            <h1>Kandy Korner</h1>

            <h2>Store Lokations</h2>
            <LocationList />

            <h2>Our Kandies</h2>
            <ProductList />
        </>
    )
}
