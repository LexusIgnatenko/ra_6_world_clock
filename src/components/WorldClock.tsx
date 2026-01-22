import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';
import { useState, useEffect } from 'react';
import type IWorldClock from './IWorldClock';
import getCurrentTimeWithOffset from './getCurrentTimeWithOffset';

interface WorldClockProps {
  worldClock: IWorldClock,
  onDelete: (id: string) => void
}

function WorldClock({ worldClock, onDelete }: WorldClockProps) {
  const timezoneOffset = Number(worldClock.timezoneOffset);
  const [ value, setValue ] = useState(getCurrentTimeWithOffset(timezoneOffset));

  useEffect(() => {
    let intervalId: number | undefined = undefined;
    setTimeout(() => {
      intervalId = setInterval(() => setValue(getCurrentTimeWithOffset(timezoneOffset)), 1000);
    }, 1000 - new Date().getMilliseconds());

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="world-clock-item">
      <div className="world-clock-item__title">
        {worldClock.title}
        <button className="world-clock-item__remove" onClick={() => onDelete(worldClock.id)}>&#215;</button>
      </div>
      <Clock className="world-clock-item__time" value={value} renderNumbers />
    </div>
  );
}

export default WorldClock;