// 這邊不用因為 index.html 裡已經有了
// import React from 'react';
// import ReactDOM from 'react-dom';
import { inject_CSS_File } from './function.js';
inject_CSS_File("./common.css");

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
