import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import BooksAppSample from './sample.js';
import BookSearch from './Component/BookSearch.js';
import MyReads from './Component/MyReads.js';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component{
  state = {
    allBookList:[],
    bookShelfs:{
      currentlyReading: [],
      wantToRead : [],
      read: []
    }
  };
  componentDidMount(){
    this.getAll();
  }

  getAll = ()=>{
    BooksAPI.getAll().then(data=>{
      this.setState(currentState=>({allBookList:data}));
      this.refreshShelf(data);
    });
  };
  refreshShelf = (data)=>{
    let currentlyReading = data.filter(book=>book.shelf === 'currentlyReading');
    let wantToRead = data.filter(book=>book.shelf === 'wantToRead');
    let read = data.filter(book=>book.shelf === 'read');
    let bookShelfs = {
      currentlyReading: currentlyReading,
      wantToRead : wantToRead,
      read: read
    }
    this.setState(currentState=>({bookShelfs:bookShelfs}));

  };


  render(){
    return (
      <div>
        <Route path='/sample' component={BooksAppSample}/>
        <Route exact path ='/' render = {()=>(
          <MyReads
            shelfs ={this.state.bookShelfs}
            getAll = {this.getAll}
          />
        )}/>
        <Route path ='/search' render ={()=>(
          <BookSearch
            getAll = {this.getAll}
            shelfs = {this.state.allBookList}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
