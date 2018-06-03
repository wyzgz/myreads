import React from 'react';
import BooksShelf from './BooksShelf.js';
import {Link} from 'react-router-dom';

const MyReads = (props)=> {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksShelf bookShelfs = {props.shelfs} update = {props.update}/>
            </div>
          </div>
          <div className="open-search">
            <Link to = '/search'>Add a book</Link>
          </div>
        </div>
      </div>
    );

}

export default MyReads;
