import React from "react";
import Bord from "./components/Board";
import "./styles/root.scss"
const App = () =>{
  
  return (
    <div className="app">
      <h1>Tic Tac Toe!</h1>
      <Bord />
    </div>
  )
}

export default App