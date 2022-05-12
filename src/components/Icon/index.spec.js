import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Icon from '.';

describe('Icon', () => {

  it('should render the icon', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Icon name="facebook" />);
    const actual = renderer.getRenderOutput().props.className.include('facebook');
    expect(actual).toEqual(true);
  });  

});