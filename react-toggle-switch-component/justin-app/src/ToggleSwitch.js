import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [flick, setFlick] = useState(false);

  function handleClick() {
    setFlick(!flick);
  }

  return (
    <div className="Flex">
      <div className= {!flick ? "Off" : "On"}>
        <div className={!flick ? "Oval-off" : "Oval-on" }></div>
        <div className="Circle" onClick={handleClick}></div>
        <h3>{ !flick ? 'Off' : 'On' }</h3>
      </div>
    </div>
  )
}
