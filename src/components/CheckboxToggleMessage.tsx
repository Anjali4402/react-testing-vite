import React, { useState } from 'react'

const CheckboxToggleMessage = () => {

    const [show , setShow] = useState(false);

  return (
    <div>
        <h1>Checkbox Toggle Message</h1>

        <div>
            <input type='checkbox'
            onChange={(e)=> setShow(e.target.checked)}
             />

             {
                show && 
                <div>Hello world!</div>
             }


        </div>

    </div>
  )
}

export default CheckboxToggleMessage