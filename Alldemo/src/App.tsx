// ------------------  Example 1  ------------------

import NameInput from "./escape-hatches/NameInput";
import ScrollExample from "./escape-hatches/ScrollExample";
import Video from "./escape-hatches/VideoPlayer";
import { ButtonEvent } from "./event/Button";
import { Toolbar } from "./event/Toolbar";
import { MyComponent } from "./Hooks/UseEffectsDemo";
import Timer from "./Hooks/useRefDemo";

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />;
// };

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };

// ------------------  Example 2 ------------------

// function Cart() {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

//   return (
//     <>
//       <h1>Cart</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

//       <ul>
//         <h4> 👇Products </h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const App = () => <Cart />;

// ------------------ Example 3 (Ternary Operator) ------------------
// condition ? true : false

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

const App = () => {
  return (
    // <section>
    //   <Password isValid={true} />
    // </section>

    // <div>
    //   <Toolbar
    //     onPlayMovie={() => alert("Playing!")}
    //     onUploadImage={() => alert("Uploading!")}
    //   />
    // </div>

    // <ButtonEvent/>
    // <NameInput/>
    // <ScrollExample/>
    // <Video/>
    // <MyComponent/>
    <Timer/>
  );
};

export default App;
