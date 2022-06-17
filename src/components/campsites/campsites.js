import React, { useEffect, useState } from "react";


export const CampsitesList = () => {
    const [camps, setCamps] = useState([])



    const fetchCamps = () => {
        return fetch("http://localhost:8000/campsites", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
    }


    useEffect(() => {
        fetchCamps()
            .then((camps) => {
                setCamps(camps)
            })
    },
        [])

    return (

        <div>
            <h2>Campsites</h2>
            {
                camps.map(
                    (campsiteObject) => {
                        return <>
                            <p key={campsiteObject.id}>{campsiteObject.name}
                            </p>
                        </>

                    }
                )
            }


        </div>
    )
}
