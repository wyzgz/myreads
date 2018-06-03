import React from 'react';
import SearchBar from './SearchBar.js';
import BookList from './BookList.js';
import * as BooksAPI from '../BooksAPI';

class BookSearch extends React.Component{
  state={
    searchResult:[]
  }

  onSearchBook = (query)=>{
    BooksAPI.search(query).then(data=>{
      let newData = data;
      if(data && data.length
          && this.props.shelfs && this.props.shelfs.length){
        let shelfList = this.props.shelfs;
        newData = data.map(book=>{
          const bookInshelf = shelfList.find(shelfBook =>shelfBook.id === book.id);
          return bookInshelf? bookInshelf:book;
        })
      }
      this.setState(currentState=>({searchResult:newData}))
    })
  };

  render(){
    const bookList = this.state.searchResult?this.state.searchResult:[];
    return (
      <div className="app">
          <div className="search-books">
            <SearchBar onSearch = {this.onSearchBook}/>
          </div>
          <div className="search-books-results">
           { (bookList && bookList.length>0) &&
             <BookList bookList = {bookList} update = {this.props.update}/>
           }
          </div>
      </div>
    );
  }
}
export default BookSearch;
