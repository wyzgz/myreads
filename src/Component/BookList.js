import React from 'react';
import Book from './Book.js';

class BookList extends React.Component{
  render(){
    const bookList = this.props.bookList;
    return(
        <ol className="books-grid">
        {bookList && bookList.length
            && bookList.map((book,index)=>(
            <li key={book.id}>
              <Book bookInfo = {book} update = {this.props.update}/>
            </li>
          ))}
        </ol>
    )
  }
}

export default BookList;
