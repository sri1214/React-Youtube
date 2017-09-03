import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {value: '', keyStrokeCounter: 0}
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event){
    //console.log(event.target.value);
    var searchTerm = event.target.value;
    this.setState({'value': searchTerm});
  }

  handleSubmit(event){
    event.preventDefault();
    var searchTerm = this.state.value;
    console.log(searchTerm);
    this.props.fetchVideos(searchTerm);
  }
  render(){
    return (
      <div className = 'search-bar'>
        <form className = 'form-inline' onSubmit = {this.handleSubmit}>
          <input value={this.state.value} className = 'form-control search-bar-input'  onChange = {this.handleOnChange}/>
          <button type="submit" className="btn btn-default button"  aria-label="Left Align">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar
