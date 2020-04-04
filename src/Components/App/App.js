import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.SearchResults = [
      {
        name: '',
        artist: '',
        album: '',
        id: 0
      }
    ];
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import logo from xxx
// 		<img src={logo} className="App-logo" alt="logo" />