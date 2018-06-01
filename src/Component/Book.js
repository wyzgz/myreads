import React from 'react';

class Book extends React.Component{
  state = {value:''};
  book = this.props.bookInfo;
  
  componentDidMount(){
    const book = this.book;
    this.setState({value:book && book.shelf? book.shelf:'none'});
  }

  handleChange = (event)=>{
    const book = this.book;
    const currentShelf = book && book.shelf? book.shelf:'';
    const shelf = event.target.value;
    this.setState(()=>({value:shelf}));
    if(shelf !== currentShelf && this.props.update){
      this.props.update(book,shelf);
    }
  };
  render(){
    const book = this.book;
    const imgURL = book && book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail:'';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage:`url('${imgURL}')`}}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange = {this.handleChange}>
              <option value="none" disabled>Move to...</option>
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
