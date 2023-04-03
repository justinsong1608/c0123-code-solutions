import { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { RxDotFilled, RxDot } from 'react-icons/rx';
import './Carousel.css';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, items.length]);

  function handleClickNext() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleClickPre() {
    setCurrentIndex(((currentIndex - 1) + items.length) % items.length);
  }

  function handleClickDot(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div className="Carousel-container">
        <Button content={<AiOutlineLeft size={70} />} onShow={handleClickPre}/>
        <img src={items[currentIndex].url} alt={items[currentIndex].name}></img>
        <Button content={<AiOutlineRight size={70} />} onShow={handleClickNext} />
      </div>
      <Buttons data={items} currentIndex={currentIndex} onShow={handleClickDot} />
    </div>
  );
}

function Button ({onShow, content}) {
  return <button onClick={onShow} className='Carousel-button'>{content}</button>;
}

function Buttons({ data, onShow, currentIndex }) {
  const buttons = data.map((topic, index) => (
    <Button
      key={index}
      onShow={() => onShow(index)}
      content={index === currentIndex ? <RxDotFilled size={70} /> : <RxDot size={70} /> } />
  ));

  return <div>{ buttons }</div>
}
