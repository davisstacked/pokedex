import React, { useState } from 'react';

const NewTimerForm = ({addTimer, form, setForm}) => {

  const [timer, setTimer] = useState({timer: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    addTimer(timer);
    setForm(!form);
    setTimer({timer: ''});
  }

  const handleChange = (e) => {
    setTimer(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const handleCancel = () => {
    setForm(!form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="timer">Title</label>
      <input
        onChange={handleChange}
        name="timer"
        value={timer.timer}
        type="text" />
      <div>
        <button onSubmit={handleSubmit}>Create</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default NewTimerForm;

