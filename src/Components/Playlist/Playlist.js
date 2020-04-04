import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <Tracklist tracks={this.props.PlaylistTracks} />
                <input defaultValue={'New Playlist'} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;