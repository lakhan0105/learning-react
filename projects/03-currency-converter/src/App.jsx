import { useState } from "react";
import "./App.css";
import { useCurrencyInfo } from "./Hooks/useCurrencyInfo";
import { Box } from "./components/Box";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedCurr, setConvertedCurr] = useState(0);

  const currData = useCurrencyInfo(from);
  const currenciesList = Object.keys(currData);

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedCurr);
    setConvertedCurr(amount);
  }

  function convert() {
    setConvertedCurr(amount * currData[to]);
  }

  return (
    <main>
      <h1 className="page-heading">currency converter</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="box-container">
          <Box
            label={"From"}
            amount={amount}
            onAmountChange={(eAmt) => {
              setAmount(eAmt);
            }}
            currVal={from}
            currenciesList={currenciesList}
            onCurrencyChange={(eCurr) => {
              setFrom(eCurr);
            }}
          ></Box>

          <Box
            label={"To"}
            amount={convertedCurr}
            currVal={to}
            currenciesList={currenciesList}
            onCurrencyChange={(eCurr) => {
              setTo(eCurr);
            }}
          ></Box>

          <button className="btn convert-btn" type="submit">
            {`convert ${from} to ${to}`}
          </button>
          <button className="btn swap-btn" onClick={swap}>
            swap
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;
