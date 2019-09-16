import React from "react";
import Players from "./components/Players";
import useLocalStorage from "./components/hooks/useLocalStorage";
import "./App.scss";
function App() {
  const [favorite, setFavorite] = useLocalStorage("favorite", "0");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Women's World Cup</h1>
      </header>
      <Players favorite={favorite} setFavorite={setFavorite} />
    </div>
  );
}

export default App;
