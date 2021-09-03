import React, { useEffect, useState } from "react"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/Customers")
                .then(res => res.json())
                .then((fetchedAPICustomerArray) => {
                    setCustomers(fetchedAPICustomerArray)
                })
        },
        []
    )

    return(  
        <>
           <h3>
              Valued Kustomers
           </h3>
              { 
                  customers.map(
                      (customerObject) => { 
                      return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p> 
                      }  
                  )
              }
          </> 
    )

}


