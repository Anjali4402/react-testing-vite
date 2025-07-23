import React, { useEffect, useState } from 'react'

const APICall = () => {

    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: 'GET'
            });

            const result = await response.json();


            setData(result)



        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAPI()

    }, [])

    return (
        <div>
            <h1>APICall</h1>
            {
                data && data.map((item)=> (
                    <li id={item.name} >{item.name}</li>
                ))
            }
        </div>
    )
}

export default APICall