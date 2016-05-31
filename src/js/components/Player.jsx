import React from 'react';


export default class Player extends React.Component {
  render() {
    var track = this.props.player.track;
    return <div className="player">
      <h2>{track.title}</h2>
      <audio onPlay={this.props.handlePlay} onPause={this.props.handlePause}
        controls="true" src={track.url} />
    </div>;
  }
}
