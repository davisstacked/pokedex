import React, { useState } from 'react';
import { Timer } from './Timer';
import NewTimerForm from './NewTimerForm';
import { v4 as uuid } from "uuid";

const TimerList = () => {

  const [timers, setTimers] = useState([]);
  const [form, setForm] = useState(true);

  const addTimer = (timer) => {
    const newTimer = { ...timer, id: uuid()}
    setTimers(state => ([...state, newTimer]))
  }

  const removeTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id))
  }

  const renderTimers = () => {
    return (
      <ul>
        <li style={{listStyleType: "none"}}>
          {timers.map(timer => (
            <Timer
              remove={() => removeTimer(timer.id)}
              key={timer.id}
              id={timer.id}
              title={timer.timer}
            />
          ))}
        </li>
      </ul>
    )
  }

  return (
    <>
    {
      !form ? (
        < NewTimerForm
            addTimer={addTimer}
            setForm={setForm}
            form={form}
        />
    ) : (

      <div>
        <h1>Timers</h1>
        {renderTimers()}
        <button onClick={() => setForm(!form)}>
          ADD
        </button>
      </div>
      )
    }
  </>
  )
}

export default TimerList;