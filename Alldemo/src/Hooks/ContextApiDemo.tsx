// 1. Importing (createContext)
import { createContext } from "react"; 

// 2. Creating instance of (createContext)
export const Data = createContext();
export const Data1 = createContext();

const ContextApiDemo = () => {
  const name = "Ishwar Web Dev";
  const age = 19;

  return (
    <> 
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};
 
export default  ContextApiDemo

const ComponentA = () => {
  return <ComponentB />;
};
 

 

const ComponentB = () => {
  return <ComponentC />;
}; 


 

const ComponentC = () => {
  return (
    <>
      {/* 4. Consuimg/Accessing Data */}
      <Data.Consumer>
        {(name) => {
          // return <h1>My name is: {name}</h1>;
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is: {name} and I'm {age} years old.
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};
 