import React from 'react';
import './SearchResults.css';
import TrackList from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd} isRemoval={false} />
                <h2>Results</h2>
            </div>
        );
    }
}

export default SearchResults;