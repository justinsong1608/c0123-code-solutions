import './App.css';
import AppDrawer from './AppDrawer';

const items = ["Kevin", "Henry", "Lamberto", "Tim", "Bishan"];

function App() {
  return (
    <AppDrawer items={items} />
  );
}

export default App;
