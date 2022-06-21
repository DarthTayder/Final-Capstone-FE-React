import React, {useState} from "react";
import { useHistory } from "react-router-dom";

export const CreateCampsite = () => {
    const [campName, setCampName] = useState('')
    const [campLocation, setCampLocation] = useState('')
    const [poi, setPoi] = useState('')
    const [city, setCity] = useState('')
    


    const history = useHistory()

    const handleNameChange = event => {

        setCampName(event.target.value)
    
    };

    const handleLocationChange = event => {
    
        setCampLocation(event.target.value)
    
    };

    const handlePoiChange = event => {
    
        setPoi(event.target.value)
    
    };

    const handleCityChange = event => {
    
        setCity(event.target.value)
    
    };


    const submitCamp = (evt) => {
        evt.preventDefault()


    const NewCamp = {
        name: campName,
        address: campLocation,
        poi: poi,
        city: city,
        userId: (localStorage.getItem("user"))
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            },
            body: JSON.stringify(NewCamp)
        }

        return fetch(`http://localhost:8000/campsites`, fetchOption)
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
                <div className="form-group">
                    <label>Points of Interest:</label>
                    <input
                        onChange={handlePoiChange}

                        value={poi}

                        required 
                        type="text"
                        className="form-control"
                        placeholder="Points of Interest" />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <select onChange={handleCityChange}value={city}>
                        <option defaultValue="">Select A City</option>
                        <option value="Nashville">Nashville</option> 
                        <option value="Knoxville">Knoxville</option>
                        
                    </select>
                </div>
            


            </fieldset>
            <button onClick={submitCamp} className="btn btn-primary">
                Submit Camp
            </button>
        </form>
            
            )

        
    }



