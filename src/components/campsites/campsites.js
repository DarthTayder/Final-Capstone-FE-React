import React, { useEffect, useState } from "react";
import "./campsites.css"

import { Campsite } from "./editCampsite";

export const fetchCamps = () => {
    return fetch("http://localhost:8000/campsites", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
}

export const deleteCamps = (id) => {
    
    fetch(`http://localhost:8000/campsites/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    
    // fetchCamps()
    .then (() => fetchCamps())
}




export const CampsitesList = () => {
    const [camps, setCamps] = useState([])
    
    useEffect(
        () => {
            fetchCamps()
                .then(setCamps)
        },
        []
    )


    

        
    


    

        
        



    return (
            
        <div className="campsites">
            <h2>Campsites</h2>
            
            
            {
                camps.map(
                    (campsiteObject) => {
                        return <Campsite campsiteObject={campsiteObject} setCamps={setCamps}/>
                        

                    }
                )
            }


        </div>
    )
}
