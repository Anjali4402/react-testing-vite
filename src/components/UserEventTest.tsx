import { useState } from "react";



const UserEventTest = () => {


    const [initalVal, setInitialVal] = useState('');
    const [userName, setUserName] = useState("");


    return (

        <div>
            <h1>User Event Librery</h1>

            <div>
                <h1>Test onClick Event</h1>

                <p>{initalVal}</p>
                <button onClick={()=>{setInitialVal('change it')}} >Click me</button>


            </div>



            <div>
                <h1>Test onchange event</h1>

                <p>{userName}</p>
                <input type="text"
                    value={userName}
                    onChange={(event) => { setUserName(event.target.value) }}
                />

            </div>



        </div>
    )
};

export default UserEventTest;