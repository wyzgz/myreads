import React from 'react';
import Book from './Book.js';

const BookList = (props)=>{
  const bookList = props.bookList;
  return(
      <ol className="books-grid">
      {bookList && bookList.length
          && bookList.map((book,index)=>(
          <li key={book.id}>
            <Book bookInfo = {book} update = {props.update}/>
          </li>
        ))}
      </ol>
  );

}

export default BookList;
