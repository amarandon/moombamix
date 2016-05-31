import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PlayListTrack from '../../src/js/components/PlayListTrack';
import {expect} from 'chai';


const {
  renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate
} = TestUtils;


describe("PlayList", function() {
  it("renders a track with a remove button", function() {
    const track = {
      title: "First track", url: "/first/track/path.mp3"
    };
    var noop = function() {};
    var removed = false;
    var removeTrack = function() {
      removed = true;
    };
    const component = renderIntoDocument(
      <PlayListTrack key={track.url} track={track} index={0}
            removeTrack={removeTrack} loadTrack={noop} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(items.length).to.equal(2);
    const button = items[0];
    Simulate.click(button);
    expect(removed).to.equal(true);
  });
});	

