import { useState } from 'react';
import booksData from '../../booksData.json';

export const Books = () => {
  const [filterValue, setFilterValue] = useState('Roi Evitt');

  const handleInputValue = (value) => {
    setFilterValue(value);
  };

  return (
    <div className="books">
      <h1>Hello From Books</h1>
      <label htmlFor="">
        Search an author
        <input type="text" onChange={(e) => setFilterValue(e.target.value)} />
      </label>
      {
        <ul>
          {booksData
            .sort((a, b) => (a.price < b.price ? 1 : 0))
            .map((book) => (
              <li key={book.id}>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.price}</p>
              </li>
            ))}
        </ul>
      }
      {/*  <ul>
        {booksData
          .filter((book) => book.author === filterValue)
          .map((book) => (
            <li key={book.id}>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.price}</p>
            </li>
          ))}
      </ul> */}
    </div>
  );
};

// wir wollen nur die erste 20 Bücher darstellen

// wir bekommen wir nur die Bücher von Breanne Serjeantson
