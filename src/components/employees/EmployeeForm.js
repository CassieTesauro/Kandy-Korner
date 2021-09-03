import React, { useState } from "react"
import { useHistory } from "react-router-dom"    //NEED LOCATION DROPDOWN IN FORM

export const EmployeeForm = () => {

    const [employee, updateEmployee] = useState({
        name: "",
        hourlyRate: 0,
        manager: false,
        fullTime: false

    });

    const history = useHistory()

    const finishHiring = (evt) => {
        evt.preventDefault()

        const newEmployee = {
            name: employee.name,
            hourlyRate: employee.hourlyRate,
            manager: employee.manager,
            fullTime: employee.fullTime

        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
            .then(() => {
                history.push("/employees")
            })

    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.hourlyRate = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate Here"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={finishHiring}>
                Finish Hiring
            </button>
        </form>
    )
}
