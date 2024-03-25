import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";
function App() {
  const [CalVal, SetCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      const Result = eval(CalVal);
      SetCalVal(Result);
    } else if (buttonText === "C") {
      SetCalVal("");
    } else {
      SetCalVal(CalVal + buttonText);
    }

    //console.log(buttonText);
  };

  return (
    <div className={styles.calculater}>
      <Display displayValue={CalVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
