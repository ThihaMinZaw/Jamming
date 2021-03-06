import React from 'react';


import './SearchBar.css';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.handleTermChange=this.handleTermChange.bind(this)
  }
  handleTermChange(e){
    this.props.onSearch(e.target.value);
  }
    render(){
        return(<div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={e=>this.handleTermChange(e)} />
        <button className="SearchButton">SEARCH</button>
      </div>);
    }
}

export default SearchBar;