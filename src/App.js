import React, { useState } from "react";
import "./app.scss";
import Header from "./features/Header";
import CurrentMoney from "./features/CurrentMoney";
import TargetMoney from "./features/TargetMoney";
const App = () => {
  const [exchangeValue, setExchangeValue] = useState("");

  return (
    <div className="app">
      <div className="container">
        <Header />
        <h2>From:</h2>
        <CurrentMoney />
        <h2>To: </h2>
        <TargetMoney />
      </div>
    </div>
  );
};

export default App;
