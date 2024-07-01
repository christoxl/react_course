import "./index.css";
import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function handleData(field, value) {
    setData((oldData) => {
      return { ...oldData, [field]: +value };
    });
  }

  return (
    <>
      <Header />
      <UserInput {...data} onDataChange={handleData} />
      <Results data={data} />
    </>
  );
}

export default App;
