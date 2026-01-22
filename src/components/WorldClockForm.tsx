import { useState, type ChangeEvent, type Dispatch } from 'react';
import { nanoid } from 'nanoid';
import type IWorldClock from './IWorldClock';

interface WorldClockFormProps {
  worldClocks: IWorldClock[],
  setWorldClocks: Dispatch<React.SetStateAction<IWorldClock[]>>
}

function WorldClockForm({ worldClocks, setWorldClocks }: WorldClockFormProps) {
  const initialFormData = { title: '', timezoneOffset: '' };
  const [ formData, setFormData ] = useState(initialFormData);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setFormData(
    { ...formData, [e.target.name]: e.target.value }
  );

  const onClick = () => {
    if (formData.title && formData.timezoneOffset) {
      setWorldClocks([ ...worldClocks, { id: nanoid(), ...formData } ]);
      setFormData(initialFormData);
    }
  };

  return (
    <form className="world-clock-form">
      <div className="world-clock-form__box">
        <label>
          Название
          <input type="text" name="title" onChange={onChange} value={formData.title} required />
        </label>
      </div>
      <div className="world-clock-form__box">
        <label>
          Временная зона
          <input
            type="number"
            name="timezoneOffset"
            step={1}
            min={-12}
            max={12}
            onChange={onChange}
            value={formData.timezoneOffset}
            required
          />
        </label>
      </div>
      <button type="button" onClick={onClick}>Добавить</button>
    </form>
  );
}

export default WorldClockForm;