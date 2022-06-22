import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CampsitesList, fetchCamps } from "./campsites";
import { deleteCamps } from "./campsites";


    
    export const Campsite = ({campsiteObject, setCamps}) => {
        const [editable, setEditCamps] = useState(false)
        const [campName, setCampName] = useState(campsiteObject.name)
        const [campLocation, setCampLocation] = useState(campsiteObject.address)
        const [poi, setPoi] = useState(campsiteObject.poi)
        const [city, setCity] = useState(campsiteObject.city)
        
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
        const handleFavoriteButton = (campsite) => {
            
            
            
        
        
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            },
        
        }
        
        return fetch(`http://localhost:8000/campsites/${campsite.id}/addToList`, fetchOption)
        .then(response => response.json())
        .then(() => {history.push("/userCampList")}
        )
    }
    
    const submitCamp = (id) => {
    
    
    
    const NewCamp = {
        name: campName,
        address: campLocation,
        poi: poi,
        city: city,
        userId: (localStorage.getItem("user"))
        }
    
        const fetchOption = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            },
            body: JSON.stringify(NewCamp)
        }
    
        return fetch(`http://localhost:8000/campsites/${id}`, fetchOption)
        .then(response => response.json())
        
    }
        return <>
        
        { editable? <form className="campForm">
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
                        />
                </div>
                <div className="form-group">
                    <label>Camp Location:</label>
                    <input
                        onChange={handleLocationChange}

                        value={campLocation}

                        required 
                        type="text"
                        className="form-control"
                        />
                </div>
                <div className="form-group">
                    <label>Points of Interest:</label>
                    <input
                        onChange={handlePoiChange}

                        value={poi}

                        required 
                        type="text"
                        className="form-control"
                        />
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
            <button onClick={(evt) => {
                evt.preventDefault()
                submitCamp(campsiteObject.id)}} className="btn btn-primary">
                Submit Camp
            </button>
        </form>: <><p key={campsiteObject.id}>{campsiteObject.name}     , Point of Interest - {campsiteObject.poi}  - {campsiteObject.city}
            
            </p>
            <p> {campsiteObject.address}</p>
            </>
}
            <button key={`camp--${campsiteObject.id}`}  onClick={() => {deleteCamps (campsiteObject.id)
                .then (fetchCamps)
                .then (setCamps); } }>Delete</button>
            
            <button onClick ={ () =>{ 
                    setEditCamps(true)
                }
            }>Edit</button>

            <button key={`fav--${campsiteObject.id}`} onClick={() => {handleFavoriteButton (campsiteObject)
            .then (fetchCamps)
            .then (setCamps); } }>Favorite</button>
    
        </>

    }
