//import styles from "../App.module.css";
import styles from "./ButtonContainer.module.css";
//import Buttons from "./Buttons";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "9",
    "*",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonNames) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonNames)}
          key={buttonNames}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
