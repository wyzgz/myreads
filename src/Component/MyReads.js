import React from 'react';
import BooksShelf from './BooksShelf.js';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class MyReads extends  React.Component{

  updateShelf = (book,shelfname)=>{
    BooksAPI.update(book,{shelf:shelfname}).then(()=>{
      this.props.getAll();
    })
  };

  render(){
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksShelf bookShelfs = {this.props.shelfs} update = {this.updateShelf}/>
            </div>
          </div>
          <div className="open-search">
            <Link to = '/search'>Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyReads;
