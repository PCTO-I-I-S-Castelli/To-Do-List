// src/TaskForm.jsx
import React from 'react';


const getHost = () => {
  return '127.0.0.1';
};


const sendTaskData = async (author, task, status) => {
  const data = {
    author,
    task,
    status
  };
  const host = getHost();
  try {
    const response = await fetch(host, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const author = 'John Doe';
    const task = 'Complete the project';
    const status = 'In Progress';

    sendTaskData(author, task, status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send</button>
    </form>
  );
};

export default TaskForm;
