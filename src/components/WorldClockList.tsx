import WorldClock from './WorldClock';
import type IWorldClock from './IWorldClock';

interface WorldClockListProps {
  worldClocks: IWorldClock[],
  onWorldClockDelete: (id: string) => void
}

function WorldClockList({ worldClocks, onWorldClockDelete }: WorldClockListProps) {
  return (
    <div className="world-clock-list">
      {worldClocks.map(w => (
        <WorldClock key={w.id} worldClock={w} onDelete={onWorldClockDelete} />
      ))}
    </div>
  );
}

export default WorldClockList;