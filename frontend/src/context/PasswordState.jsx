import React, { useState } from 'react'
import PasswordContext from './PasswordContext'

const PasswordState = (props) => {
    const [readData, setReadData] = useState([]);

    const BACKENDURL = "http://localhost:5000";

    const handleReadForm = async () => {
        try {
            const response = await fetch(`${BACKENDURL}/readForm`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })

            const data = await response.json();

            if (response.ok) {
                setReadData(data.formReaddata);
            }
            else {
                console.log("Failed to fetch data");
                setReadData([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PasswordContext.Provider value={{ BACKENDURL, handleReadForm, readData, setReadData }}>
            {props.children}
        </PasswordContext.Provider>
    )
}

export default PasswordState
