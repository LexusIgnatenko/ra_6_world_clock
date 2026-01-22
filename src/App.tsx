import './App.css';
import { useState } from 'react';
import WorldClockForm from './components/WorldClockForm';
import WorldClockList from './components/WorldClockList';
import type IWorldClock from './components/IWorldClock';

function App() {
  const [ worldClocks, setWorldClocks ] = useState<IWorldClock[]>([]);

  const onWorldClockDelete = (id: string) => {
    if (!window.confirm('Вы действительно хотите удалить эти часы?')) {
      return;
    }
    setWorldClocks(worldClocks.filter(w => w.id !== id));
  };

  return (
    <div className="world-clock">
      <WorldClockForm worldClocks={worldClocks} setWorldClocks={setWorldClocks} />
      <WorldClockList worldClocks={worldClocks} onWorldClockDelete={onWorldClockDelete} />
    </div>
  );
}

export default App;