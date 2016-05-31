import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PlayList from '../../src/js/components/PlayList';
import {expect} from 'chai';


const {
  renderIntoDocument, scryRenderedDOMComponentsWithTag
} = TestUtils;


describe("PlayList", function() {
  it("renders a list", function() {
    const trackList = [
      {title: "First track", url: "/first/track/path.mp3"},
      {title: "Second track", url: "/second/track/path.mp3"}
    ];
    var noop = function() {};
    const component = renderIntoDocument(
      <PlayList trackList={trackList} removeTrack={noop} loadTrack={noop} />
    );
    const items = scryRenderedDOMComponentsWithTag(component, 'li');
    expect(items.length).to.equal(2);
  });
  
});	

