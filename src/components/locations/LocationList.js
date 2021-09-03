import React, { useEffect, useState } from "react"  //import react and built-in hooks

//Module Responsibility: house a function that handles the location data.  store, listen/react, render


export const LocationList = () => {
    const [locations, locationsFunction] = useState([]) //prepare to store the data locally.  state is initially an empty array.  


    useEffect( //initial useEffect to fetch the data and store it 
        () => {
            fetch("http://localhost:8088/locations") //fetch and translate the API JSON state
                .then(res => res.json())
                .then((fetchedAPILocationData) => { 
                    locationsFunction(fetchedAPILocationData) //use the function to put the state into the locations variable to store locally
                })
            },
        []
    )

    return ( //code in the curly brackets is JS
        <>
            {
                locations.map(
                    (location) => {
                        return <div key={`location--${location.id}`}> 
                                    <p>Now serving sweets in {location.city}</p>
                               </div>
                    }
                )
            }
        </>
    )



}