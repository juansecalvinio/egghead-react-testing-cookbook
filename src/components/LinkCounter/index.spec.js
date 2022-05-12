import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import LinkCounter from '.';

expect.extend(expectJSX);

describe('LinkCounter', () => {

  it('should be a link', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LinkCounter count={5} />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected);
  });

  it('should render like counts', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LinkCounter count={5} />);
    const actual = renderer.getRenderOutput();
    const expected = '5 likes';
    expect(actual).toEqual(expected);
  });

  function renderIsActive(isActive) {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LinkCounter count={5} isActive={isActive} />);
    return renderer.getRenderOutput().props.className
    .include('LikeCounter--active');
  }

  it('should show the like count as active', () => {
    expect(renderIsActive(true)).toEqual(true);
  });

  it('should show the like count as inactive', () => {
    expect(renderIsActive(false)).toEqual(false);
  });

});