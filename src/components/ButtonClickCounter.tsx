import { useState } from "react"


const ButtonClickCounter = () => {

    const [count , setCount] = useState(0);

  return (
    <div>
        Button Click Counter

        <h3>Clicked {count} times</h3>

        <button
        onClick={()=>{setCount(count+1)}}
        >Click me</button>

    </div>
  )
}

export default ButtonClickCounter