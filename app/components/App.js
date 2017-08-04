import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleInput} value={this.state.value}></textarea>
        <div>{this.state.input}</div>
      </div>
    );
  }
}
