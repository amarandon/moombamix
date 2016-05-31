import React from 'react';

var PlayListTrack = React.createClass({
  loadTrack: function() {
    this.props.loadTrack(this.props.index); 
  },
  render: function() {
    return (
    <li key="{this.props.track.url}" onClick={this.play}>
      <button onClick={this.props.removeTrack}>Remove</button>&nbsp;
      <button onClick={this.loadTrack}>Load</button>&nbsp;
      {this.props.track.title}
    </li>
    );
  }
});

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
