import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import './AppDrawer.css';

export default function AppDrawer({ items }) {
  const [menu, setMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState('');

  function handleClickMenu() {
    setMenu(!menu);
  }

  function handleClickButton(index) {
    setCurrentIndex(index);
    setMenu(!menu);
  }

  return (
    <div>
      <div className={!menu ? 'nothing' : 'App-drawer'}>
        <MenuIcon onOpen={handleClickMenu} hidden={!menu ? 'App-drawer-menu-closed' : 'App-drawer-hidden'} />
        <h2 className={!menu ? 'App-drawer-hidden' : 'App-drawer-show'}>MENU</h2>
        <Buttons items={items} hidden={!menu ? 'App-drawer-hidden' : 'App-drawer-button' } onShow={handleClickButton}/>
      </div>
      <h1>{items[currentIndex]}</h1>
      <div className={!menu ? 'App-drawer-overlay App-drawer-hidden' : 'App-drawer-overlay'} onClick={() => {setMenu(!menu)}}></div>
    </div>
  );
}

function MenuIcon({onOpen, hidden}) {
  return (
  <div>
    <FiMenu onClick={onOpen} className={hidden}/>
  </div>
  );
}

function Button({text, onShow, hidden}) {
  return <button onClick={onShow} className={hidden}>{text}</button>;
}

function Buttons({items, onShow, currentIndex, hidden}) {
  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <Button
        key={i}
        text={items[i]}
        onShow={() => onShow(i)}
        hidden={hidden}/>
    );
  }
  return <div>{buttons}</div>
}
