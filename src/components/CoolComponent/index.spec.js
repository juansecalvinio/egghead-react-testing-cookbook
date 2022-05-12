import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const CoolComponent = ({greeting}) => (
  <section>
    <h1>Greeting</h1>
    <div>{greeting}!</div>
  </section>
)

describe('CoolComponent', () => {

  it('should render the greeting', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting="hello world" />);
    const actual = renderer.getRenderOutput();
    const expected = <div>hello world</div>;
    expect(actual).toEqual(expected);
  })

})