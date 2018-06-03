import React from 'react';

class Book extends React.Component{
  book = this.props.bookInfo;
  state = {value:this.props.book && this.props.book.shelf? this.props.book.shelf:'none'};


  componentDidMount(){
    const book = this.book;
  }

  handleChange = (event)=>{
    const book = this.book;
    const currentShelf = book && book.shelf? book.shelf:'';
    const newShelf = event.target.value;
    this.setState(()=>({value:newShelf}));
    if(newShelf !== currentShelf && this.props.update){
      book.shelf = newShelf;
      this.props.update(book,currentShelf,newShelf);
    }
  };
  render(){
    const book = this.book;
    const imgURL = book && book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail:'';
    const style = {
      width: 128,
      height: 193,
      backgroundImage:`url('${imgURL}')`
    };
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange = {this.handleChange}>
              <option value="moveto" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    );
  }
}

export default Book;
