import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work correctly!
 */
export default function Container({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleClickNext() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleClickPre() {
    setCurrentIndex(((currentIndex - 1) + items.length) % items.length);
  }

  return (
    <div>
      <div>{items[currentIndex]}</div>
      <div>
        <Button text="Prev" onShow={handleClickPre} />
        <Buttons count={items.length} currentIndex={currentIndex} onShow={index => setCurrentIndex(index)}/>
        <Button text="Next" onShow = {handleClickNext}/>
      </div>
    </div>
  );
}

/**
 * A button that toggles its color between white and lightblue.
 * TODO: Remove the toggle behavior and make the background color a prop, default white.
 * TODO: When clicked, change the current item in the Container.
 */
function Button({ text, backgroundColor, onShow}) {
  return <button style={{ backgroundColor }} onClick={onShow}>{text}</button>;
}

/**
 * An array of buttons.
 * TODO: Highlight only the active button lightblue.
 */
function Buttons({ count, onShow, currentIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <Button
        key={i}
        text={i}
        onShow={() => onShow(i)}
        backgroundColor={i === currentIndex ? 'lightblue' : undefined} />)
  }
  return <div>{buttons}</div>;
}
