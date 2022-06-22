import React, { useEffect, useState } from "react";
import { fetchCamps } from "../campsites/campsites";





export const UserCampList = () => {
    const [userCamps, setUserCamps] = useState([])
    const [campsites, setCampsites] = useState([])
    const fetchUserList = () => {
        fetch(`http://localhost:8000/user_list/currentUser`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }
        })
        .then(response => response.json())
        .then((data) => {
            setUserCamps(data)
        })
    
    }
    const deleteCamps = (id) => {
    

        fetch(`http://localhost:8000/user_list/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }
        })
        
        .then (() => fetchUserList())
        
    
        
    }

    
    

    const fetchCamps = () => {
        fetch(`http://localhost:8000/campsites`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
    .then((data) => {
        setCampsites(data)
    })

}


    

    useEffect(() => {
        
        fetchUserList()
        fetchCamps()
        
        
    
    
    },
    []
    )

    const campsMap = (campsiteId) => {
        return campsites?.find(
            campsite => campsite.id === campsiteId
        )
    
    }

    return (
        
        <>
        <h2>Saved Camps</h2>
        {
            userCamps.map(
                (campsObject) => {
                    return <><p key={`savedList--${campsObject.id}`}>{campsMap(campsObject.campsiteId)?.name}</p>
                    <button onClick={() => deleteCamps(campsObject.id)}> Delete </button></>
                }
                )
            }
        </>
    )
}