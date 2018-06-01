import React from 'react';
import {Link} from 'react-router-dom'

class SearchBar extends React.Component{

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  handleClick = (e)=>{
    this.clearQuery();
  }
  handleChange = (e)=>{
    this.updateQuery(e.target.value);
    if(this.props.onSearch){
      this.props.onSearch({'query':e.target.value});
    }
  };

  render(){
    return (
      <div className="search-books-bar">
        <Link to='/' className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            name="query"
            placeholder="Search by title or author"
            onChange = {this.handleChange}
            onClick = {this.handleClick}
            value = {this.state.query}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
