import { useState } from 'react';
import './Accordion.css';

export default function Accordion({content}) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    index === activeIndex ? setActiveIndex(null) :setActiveIndex(index);
  }

  return (
    <Panel content={content} onShow={handleClick} activeIndex={activeIndex} />
  );
}

function Button({onShow, title}) {
  return <button onClick={onShow} className='Accordion-button'>{title}</button>
}

function Information({info, isActive}) {
  return <p className={isActive ? 'Accordion-info' : 'Accordion-hidden'}>{info}</p>;
}

function Panel({content, onShow, activeIndex}) {
  const buttons= [];
  for (let i = 0; i < content.length; i++) {
    buttons.push(
      <div key={i}>
        <Button onShow={() => onShow(i)} title={content[i].title} />
        <Information info={content[i].text} isActive={activeIndex === i} />
      </div>
      );
  }
  return (
    <div className='Accordion-container'>{buttons}</div>
  );
}
