import React, { Component } from 'react';
import VideoLists from './VideoLists'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component{
  render() {
    return (
      <div className="App">
        <VideoLists />
      </div>
    );
  }
}
  
export default App;
