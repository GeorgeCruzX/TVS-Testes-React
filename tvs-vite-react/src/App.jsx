import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setContador(contador + 1)}>Contagem {contador}</button>
      </div>
    </div>
  );
}

export default App;
