import './App.css';
import Carousel from './Carousel';

const items = [
  {
    name: 'Gengar',
    url: 'https://archives.bulbagarden.net/media/upload/thumb/4/47/0094Gengar.png/600px-0094Gengar.png'
  },
  {
    name: 'Latios',
    url: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/0381Latios.png/1200px-0381Latios.png'
  },
  {
    name: 'Arceus',
    url: 'https://archives.bulbagarden.net/media/upload/9/9e/0493Arceus.png'
  },
  {
    name: 'Darkrai',
    url: 'https://archives.bulbagarden.net/media/upload/8/88/0491Darkrai.png'
  },
  {
    name: 'Lugia',
    url: 'https://archives.bulbagarden.net/media/upload/thumb/e/e2/0249Lugia.png/600px-0249Lugia.png'
  }
]

function App() {
  return (
    <div className="App">
      <Carousel items={items} />
    </div>
  );
}

export default App;
