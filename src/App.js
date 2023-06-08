import React from 'react';
import TaskManager from './TaskManager';
import StudentList from './StudentList';
import Counter from './Counter';
import ToggleButton from './Toggle';
import BookList from './BookList';
const App = () => {
  return (
    <div>
      <BookList />
    </div>
  );
};

export default App;
/*import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}! Welcome to React`);
  };

  return (
    <div>
      <h1>Simple React Assignment</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{greeting}</p>
    </div>
  );
};

export default App;*/