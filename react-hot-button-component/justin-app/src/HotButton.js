import { useState } from "react";
import './HotButton.css';

export default function HotButton() {
  const [clicked, setClicked] = useState(0)

  function handleClick() {
    setClicked(clicked + 1);
  }

  switch (true) {
    case (clicked >= 3 && clicked < 6):
      return <button className="Hot-button-dark" onClick={handleClick}> EXPLODE </button>;
    case (clicked >= 6 && clicked < 9):
      return <button className="Hot-button-purple" onClick={handleClick}> EXPLODE </button>;
    case (clicked >= 9 && clicked < 12):
      return <button className="Hot-button-red" onClick={handleClick}> EXPLODE </button>;
    case (clicked >= 12 && clicked < 15):
      return <button className="Hot-button-orange" onClick={handleClick}> EXPLODE </button>;
    case (clicked >= 15 && clicked < 18):
      return <button className="Hot-button-yellow" onClick={handleClick}> EXPLODE </button>;
    case (clicked >= 18):
      return <button className="Hot-button-white" onClick={handleClick}> EXPLODE </button>;
    default:
      return <button className="Hot-button-black" onClick={handleClick}> EXPLODE </button>;
  }
}
