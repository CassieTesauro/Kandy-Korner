import React from "react" //  Allows us to use React library features
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


//Module Responsibility: One function that determines the layout of the site

export const KandyKorner = () => {
    return(
        <>
            <NavBar />
            <h1>Kandy Korner</h1>
            <ApplicationViews />

        </>
    )
}
