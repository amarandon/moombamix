import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';


var Player = React.createClass({
  render: function() {
    var track = this.props.player.track;
    return <div className="player">
      <h2>{track.title}</h2>
      <audio onPlay={this.props.handlePlay} onPause={this.props.handlePause}
        controls="true" src={track.url} />
    </div>;
  }
});


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


var PlayList = React.createClass({
  createListItem: function(track, index) {
    var removeTrack = function(evt) {
      this.props.removeTrack(index);
    }.bind(this);
    return <PlayListTrack key={track.url} track={track} index={index} removeTrack={removeTrack} loadTrack={this.props.loadTrack} />
  },
  render: function() {
    return <div>
      <ul>{this.props.trackList.map(this.createListItem)}</ul>
    </div>;
  }
});


var MoomMixer = React.createClass({
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


ReactDOM.render(<MoomMixer />, document.querySelector('.moom'));
