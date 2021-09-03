import React, { useEffect, useState } from "react" 
import { useHistory } from "react-router-dom"
    


export const EmployeeList = () => { 
   
    const [employees, changeEmployee] = useState([])  //const [stateVariable, functionToBeUsedOnTheStateVariable] = useStateHook(variable's intitial value aka initial state 'change' 

    const history = useHistory()


    useEffect(  //use effect is like fetch get set alltogether.  2 parameters:  what function should run, and an array holding the state value of when it should run.
        () => {
            fetch("http://localhost:8088/employees") 
                .then(res => res.json())  
                .then((fetchedAPIEmployeeArray) => {   
                    changeEmployee(fetchedAPIEmployeeArray)  //invoking here triggers the use effect on line 22
                })  
        },
        []
    )

    return(  
      <>
         <div>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
        </div>
            { 
                employees.map(
                    (employeeObject) => { 
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p> 
                    }  
                )
            }
        </> 
  )
}  


