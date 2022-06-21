import React, { useEffect, useState } from "react";

export const MyCamps = () => {
    const [userCamps, setUserCamps] = useState([])
    
    const getState = () => {
        return fetch("http://localhost:8000/campsites", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }

        


    useEffect(() => {
        getState()
    },
    []
    )

    const deleteCamps = (id) => {
        fetch(`http://localhost:8088//${id}`,{
            method: "DELETE"
        })
            .then((data) => {
                getState(data)
            })
    }

        
    

    return (
        
        <>
        <h2>My Trails</h2>
        {
            userTrails.map(
                (myTrailsObject) => {
                    return <><p key={`myTrail--${myTrailsObject.id}`}>{myTrailsObject.trailName}</p>
                    <button key={myTrailsObject.id} onClick={() => { deleteTrails(myTrailsObject.id); } }> Delete </button></>
                }
                )
            }
        </>
    )
}