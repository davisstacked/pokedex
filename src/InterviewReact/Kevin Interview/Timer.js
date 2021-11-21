import React, { useState, useEffect } from 'react';

import './Timer.css';

export const Timer = (props) => {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  // this function runs as soon as component is rendered.
  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    // cleanup function for when we leave page.
    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <div className='Timer'>
      <h4 className='Timer-title'>
        {/* {props.title} */}
        Hello
      </h4>

      <div className='Timer-timer'>
        {/* we divide it by 100 because when it gets up to 99 we want it to go back to zero. incrementing by 10 miliseconds so divide by 10 so shows up as 1. */}
        {/* Minutes */}
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
        {/* Seconds */}
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
        {/* Milliseconds */}
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='Timer-delete'>
        <button onClick={props.removeTimer}>Delete</button>
      </div>
      <div className='Timer-start'>
        {timerOn ? (
          <button
            style={{ border: 'red solid 2px' }}
            onClick={() => setTimerOn(!timerOn)}
          >
            Stop
          </button>
        ) : (
          <button
            style={{ border: 'green solid 2px' }}
            onClick={() => setTimerOn(!timerOn)}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}


