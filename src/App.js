import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          这是一个react的项目啊，我的第一个项目
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PostList />
      </header>
    </div>
  );
}

export default App;
