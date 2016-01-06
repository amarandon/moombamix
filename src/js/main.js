import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss';


var Player = React.createClass({
  render: function() {
    return <audio controls="true" />;
  }
});


var PlayersContainer = React.createClass({
  render: function() {
    return <div><Player /><Player /></div>;
  }
});


var PlayListTrack = React.createClass({
  render: function() {
    return (
    <li key="{this.props.track.url}">
      <a href="#" onClick={this.props.removeHandler}>x</a> {this.props.track.title}
    </li>
    );
  }
});


var PlayListToolBar = React.createClass({
  render: function() {
    return <div>
      <input type="file" />
    </div>;
  }
});


var PlayList = React.createClass({
  render: function() {
    var createListItem = (function(track, index) {
      var removeHandler = function(evt) {
        this.props.removeHandler(index);
      }.bind(this);
      return <PlayListTrack key={track.url} track={track} removeHandler={removeHandler} />
    }).bind(this);
    return <div>
      <ul>{this.props.trackList.map(createListItem)}</ul>
      <PlayListToolBar />
    </div>;
  }
});


var MoomMixer = React.createClass({
  getInitialState: function() {
    return {
      leftPlayer: {url: '', playing: false},
      rightPlayer: {url: '', playing: false},
      trackList: [
        {title: "Naffi-I - I position riddim", url: "/home/al/Music/Naffi-I- I position riddim II.wav"},
        {title: "Ed Rush & Optical - FABRICLIVE 82 promo mix",
          url: "/home/al/Music/Ed Rush & Optical - FABRICLIVE 82 promo mix-219210497.mp3"},
      ]
    };
  },
  remove: function(index) {
    this.state.trackList.splice(index, 1);
    this.setState(this.state);
  },
  render: function() {
    return <div><PlayersContainer /><PlayList removeHandler={this.remove} trackList={this.state.trackList}/></div>;
  }
});


ReactDOM.render(<MoomMixer />, document.querySelector('.moom'));
