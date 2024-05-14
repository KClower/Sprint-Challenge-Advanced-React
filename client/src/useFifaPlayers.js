
import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFifaPlayers = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/players`)
            .then((response) => {
                setPlayers(
                    response.data
                )
                console.log(response.data)
            })
            .catch((err) => console.log(err));

    }, [])

    return [players]
}






