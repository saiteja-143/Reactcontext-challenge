import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { createContext, useContext } from "react";

// function App() {
//   const [mode, setMode] = useState("dark");
//   const styles = { background: mode === "Light" ? "black" : "white" };
//   return (
//     <div style={styles} className="App">
//       <List mode={mode} setMode={setMode} />
//     </div>
//   );
// }

// const List = ({ mode, setMode }) => (
//   <ul>
//     <ListItem value="Light" mode={mode} setMode={setMode} />
//     <ListItem value="dark" mode={mode} setMode={setMode} />
//   </ul>
// );

// const ListItem = ({ value, mode, setMode }) => (
//   <li>
//     <Button value={value} mode={mode} setMode={setMode} />
//   </li>
// );

// const Button = ({ value, mode, setMode }) => {
//   const styles = {
//     background: !(mode === "Light") ? "black" : "White",
//     color: mode === "Light" ? "black" : "White",
//   };
//   // const colr={color:"white"};
//   return (
//     <button onClick={() => setMode(value)} style={styles}>
//       {value}
//     </button>
//   );
// };

const Themecontext = createContext(null);
function App() {
  const [mode, setMode] = useState("dark");
  const styles = { background: mode === "Light" ? "black" : "white" };
  return (
    <Themecontext.Provider value={[mode, setMode]}>
      <div style={styles} className="App">
        <List />
      </div>
    </Themecontext.Provider>
  );
}

const List = () => (
  <ul>
    <ListItem value="Light" />
    <ListItem value="dark" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({ value }) => {
  const [mode, setMode] = useContext(Themecontext);
  const styles = {
    background: !(mode === "Light") ? "black" : "White",
    color: mode === "Light" ? "black" : "White",
  };

  return (
    <button onClick={() => setMode(value)} style={styles}>
      {value}
    </button>
  );
};

export default App;
