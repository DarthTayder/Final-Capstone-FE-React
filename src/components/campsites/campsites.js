import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const CampsitesList = () => {
    const [camps, setCamps] = useState([])
    const [userCamps, setUserCamps] = useState([])


const fetchCamps = async () => {
    const apiCall = await fetch("http://localhost:8088/campsites"); 
    const data = await apiCall.json();
    setCamps(data)
    }

}

const history = useHistory()

useEffect(
    async () => {
    await fetchCamps();
        },
        []
        
        )