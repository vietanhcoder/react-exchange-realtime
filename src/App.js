import React from "react";
import "./app.scss";
import Header from "./features/Header";
import CurrentMoney from "./features/CurrentMoney";
import TargetMoney from "./features/TargetMoney";
import CurrencyModal from "./features/Modal/CurrenciesModal";
import SettingModal from "./features/Modal/SettingModal";
const App = () => {
  // const [exchangeValue, setExchangeValue] = useState("");

  return (
    <div className="app">
      <div className="container">
        <Header />
        <h2>From:</h2>
        <CurrentMoney />
        <h2>To: </h2>
        {/* <TargetMoney /> */}
        <h2>Currency modal</h2>
        <CurrencyModal />
        <h2>SettingModal</h2>
        <SettingModal />
      </div>
    </div>
  );
};

export default App;
