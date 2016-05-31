import React from 'react';
import PlayList from './PlayList';
import Player from './Player';


export default React.createClass({
  getInitialState: function() {
    return {
      leftPlayer: {track: {title: 'No track', url: undefined}, playing: false},
      rightPlayer: {track: {title: 'No track', url: undefined}, playing: false},
      trackList: []
    };
  },
  removeTrack: function(index) {
    this.state.trackList.splice(index, 1);
    this.setState(this.state);
  },
  addTrack: function(evt) {
    var files = evt.target.files;
    for (let i = 0; i < files.length; i++) {
      this.state.trackList.push({
        title: files[i].name,
        url: window.URL.createObjectURL(files[i])
      });
    }
    this.setState(this.state);
  },
  loadTrack: function(index) {
    var availablePlayer;
    if (!this.state.leftPlayer.playing) {
      availablePlayer = this.state.leftPlayer;
    } else if (!this.state.rightPlayer.playing) {
      availablePlayer = this.state.rightPlayer;
    }
    if (availablePlayer) {
      availablePlayer.track = this.state.trackList[index];
      this.setState(this.state);
    }
  },
  handlePlay: function(playerState) {
    playerState.playing = true; 
  },
  handlePause: function(playerState) {
    playerState.playing = false; 
  },
  render: function() {
    return (
      <div>
        <div className="playersContainer">
          <Player player={this.state.leftPlayer}
            handlePlay={this.handlePlay.bind(this, this.state.leftPlayer)}
            handlePause={this.handlePause.bind(this, this.state.leftPlayer)}
          />
          <Player player={this.state.rightPlayer} 
            handlePlay={this.handlePlay.bind(this, this.state.rightPlayer)} 
            handlePause={this.handlePause.bind(this, this.state.rightPlayer)} 
          />
        </div>
        <PlayList removeTrack={this.removeTrack} loadTrack={this.loadTrack} trackList={this.state.trackList}/>
        <div><input type="file" multiple onChange={this.addTrack} /></div>
      </div>
    );
  }
});
