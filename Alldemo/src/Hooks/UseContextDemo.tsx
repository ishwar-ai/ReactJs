 

 import { createContext, useContext } from "react";

 const Data = createContext();
 const Data1 = createContext();
const UseContextDemo = () => {
  const name = "Ishwar";
  const Age = 22;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={Age}>
      <ComponentA/>
      </Data1.Provider>
    </Data.Provider>
  )
}

export default UseContextDemo 


const ComponentA = () => {
  return <ComponentB />;
};
 



const ComponentB = () => {
  return <ComponentC />;
};
 

const ComponentC = () => { 

  const userName = useContext(Data)
  const Age = useContext(Data1)

  return (
    <h1>
      My name is: {userName} & I'm {Age} years old.
    </h1>
  );
}; 


