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
          name: 'Good Love 2',
          artist: 'Ricky 2',
          album: 'AAA 2',
          id: 1232
        }
      ],
      
      trackURIs: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if (!this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      this.setState({
        playlistTracks: this.state.playlistTracks.concat([track])
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
alert(this.state.trackURIs);
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
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