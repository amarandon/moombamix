import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MoomMixer from '../../src/js/components/MoomMixer';
import {expect} from 'chai';


const {
  renderIntoDocument, scryRenderedDOMComponentsWithTag
} = TestUtils;


describe("MoomMixer", function() {
  it("renders two audio elements", function() {
    const component = renderIntoDocument(
      <MoomMixer />
    );
    const audioElements = scryRenderedDOMComponentsWithTag(component, 'audio');
    expect(audioElements.length).to.equal(2);
  });
});	

