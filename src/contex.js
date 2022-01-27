import { createContext, useContext } from "react";

const Themecontext = createContext(null);
function App() {
  const [mode, setMode] = useState("dark");
  const styles = { background: mode === "Light" ? "black" : "white" };
  return (
    <Themecontext.Provider value={(mode, setMode)}>
      <div style={styles} className="App">
        <List mode={mode} setMode={setMode} />
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
  // const colr={color:"white"};
  return (
    <button onClick={() => setMode(value)} style={styles}>
      {value}
    </button>
  );
};
