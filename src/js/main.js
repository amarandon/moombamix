import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';

class Hello extends React.Component {
  render() {
    return <h1>Hello, Moom!</h1>
  }
}

ReactDOM.render(<Hello/>, document.querySelector('.moom'));
