import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''}
    this.handleOnChange = this.handleOnChange.bind(this);
  }

handleOnChange(event){
  console.log(event.target.value);
  this.setState({'value': event.target.value});
}
  render(){
    return <input value={this.state.value} onChange = {this.handleOnChange}/>
  }
}

export default SearchBar
