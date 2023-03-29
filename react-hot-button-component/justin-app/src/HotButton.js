import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [clicked, setClicked] = useState(0)

  function handleClick() {
    setClicked(clicked + 1);
  }

  let color = "";

  switch (true) {
    case (clicked >= 3 && clicked < 6): color = "Hot-button-dark"; break;
    case (clicked >= 6 && clicked < 9): color = "Hot-button-purple"; break;
    case (clicked >= 9 && clicked < 12): color = "Hot-button-red"; break;
    case (clicked >= 12 && clicked < 15): color = "Hot-button-orange"; break;
    case (clicked >= 15 && clicked < 18): color = "Hot-button-yellow"; break;
    case (clicked >= 18): color = "Hot-button-white"; break;
    default: color = "Hot-button-black"; break;
  }
  return <button className={ color } onClick={handleClick}> EXPLODE </button>;
}
