import React from 'react';
import BookList from './BookList.js'

const BooksShelf = (props)=> {
    const bookShelfs = props.bookShelfs;
    const currentlyReading = (bookShelfs && bookShelfs.currentlyReading)?bookShelfs.currentlyReading:[];
    const wantToRead = (bookShelfs && bookShelfs.wantToRead)?bookShelfs.wantToRead:[];
    const read = (bookShelfs && bookShelfs.read)?bookShelfs.read:[];
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookList bookList={currentlyReading} update = {props.update}/>
        </div>
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <BookList bookList={wantToRead} update = {props.update}/>
        </div>
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <BookList bookList={read} update = {props.update}/>
        </div>
      </div>
    )
  }


export default BooksShelf;
