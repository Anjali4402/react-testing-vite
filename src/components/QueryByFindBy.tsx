import React, { useEffect, useState } from 'react'

const QueryByFindBy = () => {

    // store login state
    const login = true

    // store data value
    const [data, setData] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setData(true)
        }, 1000);
    },[])


  return (
    <div>

        <div>

            <h1>queryBy and queryAllBy</h1>

            {
                login ?
                <button>Logout</button>
                :
                <button>Login</button>
            }

        </div>


        <div>
            <h1>findBy and findAllBy</h1>

            {
                data ?
                <h2>data found</h2>
                :
                <h2>no data found</h2>
            }


        </div>


        <div>
            <h1 id='testId' >Custom query</h1>
        </div>

    </div>
  )
}

export default QueryByFindBy