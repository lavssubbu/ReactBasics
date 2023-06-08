import React, { useState } from 'react';

const BookList = () => {
  const [books] = useState([
    { title: 'Harry Potter', author: 'John Tiffany', genre: 'Fiction' },
    { title: 'The Last Thing He Told Me', author: 'Laura Dave', genre: 'Thriller' },
    { title: 'The Secret of Success', author: 'William Walker Atkinson', genre: 'Story' },
  ]);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          {showDetails && <p>Genre: {book.genre}</p>}
          <button onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;