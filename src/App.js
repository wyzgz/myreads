import React from 'react'
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
  addToShelf = (book,shelf)=>{
    this.setState(currentState => {
      let shelfs = currentState.bookShelfs;
      shelfs[shelf].push(book);
      return {bookShelfs: shelfs};
    });
  };
  addToAllList = book => {
    this.setState (currentState => {
      let allList = currentState.allBookList;
      allList.push(book);
      return {allBookList:allList};
    });
  };
  removeFromShelf =(book,shelf)=>{
    this.setState((currentState)=>{
      let prevShelfs = currentState.bookShelfs;
      let newList = prevShelfs[shelf].filter(bookInShelf => bookInShelf.id !== book.id);
      prevShelfs[shelf] = newList;
      return {bookShelfs:prevShelfs};
    });
  };
  removeFromAllList = (book) => {
    this.setState(currentState => {
      let list = currentState.allBookList.filter(bookInlist => bookInlist.id !== book.id);
      return {allBookList:list};
    })
  };
  removeFromAll = (book,prevShelf)=> {
    this.removeFromShelf(book,prevShelf);
    this.removeFromAllList(book);
  };
  addToAll = (book,newShelf) => {
    this.addToShelf(book,newShelf);
    this.addToAllList(book);
  };
  moveBeTShelf = (book,prevShelf,newShelf) => {
    this.removeFromShelf(book,prevShelf);
    this.addToShelf(book,newShelf);
  };
  update = (book,prevShelf,newShelf) => {
    BooksAPI.update(book,{shelf:newShelf}).then(()=>{
      if(book && prevShelf && newShelf){
        if(newShelf === 'none'){
          this.removeFromAll(book,prevShelf);
        }else{
          this.moveBeTShelf(book,prevShelf,newShelf);
        }
      }else if(book && newShelf){
        this.addToAll(book,newShelf);
      }
    });
  };

  getAll = ()=>{
    BooksAPI.getAll().then(data=>{
      this.setState(()=>({allBookList:data}));
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
    this.setState(()=>({bookShelfs:bookShelfs}));

  };


  render(){
    return (
      <div>
        <Route path='/sample' component={BooksAppSample}/>
        <Route exact path ='/' render = {()=>(
          <MyReads
            shelfs ={this.state.bookShelfs}
            update = {this.update}
          />
        )}/>
        <Route path ='/search' render ={()=>(
          <BookSearch
            shelfs = {this.state.allBookList}
            update = {this.update}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
