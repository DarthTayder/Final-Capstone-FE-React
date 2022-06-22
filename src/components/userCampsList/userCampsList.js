import React, { useEffect, useState } from "react";

export const UserCampList = () => {
    const [userCamps, setUserCamps] = useState([])

    const fetchUserList = () => {
        fetch(`http://localhost:8000/user_list`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }
        })
        .then(response => response.json())
        .then((data) => {
            setUserCamps(data)
        })
    
    }

    useEffect(() => {
        
        fetchUserList()
        
        
    
    
    },
    []
    )

    return (
        
        <>
        <h2>Saved Camps</h2>
        {
            userCamps.map(
                (campsObject) => {
                    return <><p key={`savedList--${campsObject.id}`}>{campsObject.name}</p>
                    <button> Delete </button></>
                }
                )
            }
        </>
    )
}