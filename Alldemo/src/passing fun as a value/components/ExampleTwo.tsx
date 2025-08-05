import { useState } from "react"

 const ExampleTwo = () => {

    const [randomNewNumber, setRandomNewNumber ] = useState(()=>{
       return Math.floor(Math.random() * 100)
    })


    const generateNewRandomNumber = () =>{
        const newNumber = Math.floor(Math.random() * 100);
        setRandomNewNumber(newNumber)
    }
  return (
    <div>
        <h1>Random Number : {randomNewNumber} </h1>
        <button onClick={generateNewRandomNumber}>Generate New Number</button>
    </div>
  )
}

export default ExampleTwo