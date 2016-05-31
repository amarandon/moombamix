import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Player from '../../src/js/components/Player';
import {expect} from 'chai';


const {
  renderIntoDocument, findRenderedDOMComponentWithTag, Simulate
} = TestUtils;


describe("Player", function() {
  it("renders and audio element with provided URL", function() {
    const player = {
      track: {title: "A track", url: "/example/path"},
      playing: false
    };
    var noop = function() {};
    const component = renderIntoDocument(
      <Player onPlay={noop} onPause={noop} player={player} />
    );
    const audio = findRenderedDOMComponentWithTag(component, 'audio');
    expect(audio.src).to.equal(player.track.url);
  });
});	

