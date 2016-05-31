import React from 'react';

export default React.createClass({
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
