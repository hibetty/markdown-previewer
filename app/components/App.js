import React from 'react';
import marked from 'marked';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    let markdown = marked(e.target.value);
    this.setState({input: markdown});
  }

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className="wrapper">
          <textarea onChange={this.handleInput} value={this.state.value} autoFocus />
          <div className="right" dangerouslySetInnerHTML={{__html: this.state.input}} />
        </div>
      </div>
    );
  }
}
