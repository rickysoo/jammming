import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

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
          id: 123,
          uri: 456
        },
        {
          name: 'Bad Love',
          artist: 'PRicky',
          album: 'CCC',
          id: 222,
          uri: 333
        }
      ],

      SearchResults: [
        {
          name: 'Good Love 2',
          artist: 'Ricky 2',
          album: 'AAA 2',
          id: 1232,
          uri: 2464
        },
        {
          name: 'Good Love 3',
          artist: 'Ricky 3',
          album: 'AAA 3',
          id: 1233,
          uri: 2224
        }
      ],

      trackURIs: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState({
        playlistTracks: this.state.playlistTracks.concat(track)
      });
    }
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    this.setState({
      trackURIs: this.state.playlistTracks.map(track => track.uri)
    });
  }

  search(term) {
let results = Spotify.search(term);
console.log(results);

    this.setState({
      SearchResults: results
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults} onAdd={this.addTrack} />
            <Playlist PlaylistName={this.state.playlistName} PlaylistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import logo from xxx
// 		<img src={logo} className="App-logo" alt="logo" />