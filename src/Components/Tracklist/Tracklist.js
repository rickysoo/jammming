import React from 'react';
import './Tracklist.css';

class Tracklist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="TrackList">
                this.props.tracks.map(track => <Track track={track} key={track.id} />);
            </div>
        );
    }
}

export default Tracklist;