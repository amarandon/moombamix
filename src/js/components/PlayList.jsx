import React from 'react';
import PlayListTrack from './PlayListTrack';


export default class PlayList extends React.Component {
  createListItem(track, index) {
    var removeTrack = function(evt) {
      this.props.removeTrack(index);
    }.bind(this);
    return <PlayListTrack key={track.url} track={track} index={index} removeTrack={removeTrack} loadTrack={this.props.loadTrack} />
  }
  render() {
    return <div>
      <ul>{this.props.trackList.map(this.createListItem.bind(this))}</ul>
    </div>;
  }
};
