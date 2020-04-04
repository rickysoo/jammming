import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistName: 'P Name',
      playlistTracks: [
        {
          name: 'Good Love',
          artist: 'Ricky',
          album: 'AAA',
          id: 123
        }
      ],
      SearchResults: [
        {
          name: 'Good Love',
          artist: 'Ricky',
          album: 'AAA',
          id: 123
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults} />
            <Playlist PlaylistName={this.state.playlistName} PlaylistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import logo from xxx
// 		<img src={logo} className="App-logo" alt="logo" />