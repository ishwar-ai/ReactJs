import { useEffect, useState } from "react"

const ExampleThree = () => {
    const [name , setName] = useState(()=>{
        const savedName = localStorage.getItem("name")
        return savedName ?  JSON.parse(savedName) : "" 
    })


    useEffect(()=>{
        localStorage.setItem("name", JSON.stringify(name))
    },[name])

    const hnadleChange =(e) =>{
        setName(e.target.value)
    }

    const hnadleClear = () => {
        setName("")
    }

  return (
    <div>
        <h1>Your name : {name} </h1>
        <input type="text" value={name} onChange={hnadleChange} placeholder="Enter Your Name" />
        <button onClick={hnadleClear}>clear Name</button>
    </div>
  )
}

export default ExampleThree