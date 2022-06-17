import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const CreateCampsite = () => {
    const [campName, setCampName] = useState('')
    const [campLocation, setCampLocation] = useState('')
    


    const history = useHistory()

    const handleNameChange = event => {

        setCampName(event.target.value)
    
    };

    const handleLocationChange = event => {
    
        setCampLocation(event.target.value)
    
    };

    const submitCamp = (evt) => {
        evt.preventDefault()


    const NewCamp = {
        name: campName,
        address: campLocation,
        
        userId: parseInt(localStorage.getItem("user")),
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewCamp)
        }

        return fetch("http://localhost:8088/campsites", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/")
        })
    }

    return (
    
        
        
        <form className="campForm">
            <h2 className="campForm__name">Create New Camp</h2>
            <fieldset>
                <div className="form-group">
                    <label>Camp Name:</label>
                    <input
                        onChange={handleNameChange}

                        value={campName}
                      
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Camp Name" />
                </div>
                <div className="form-group">
                    <label>Camp Location:</label>
                    <input
                        onChange={handleLocationChange}

                        value={campLocation}

                        required 
                        type="text"
                        className="form-control"
                        placeholder="Location" />
                </div>
                
            


            </fieldset>
            <button onClick={submitCamp} className="btn btn-primary">
                Submit Camp
            </button>
        </form>
            
            )

        
    }



