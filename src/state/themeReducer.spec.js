import expect from 'expect';
// import themeReducer from './themeReducer';

let themeReducer;

describe('themeReducer', () => {

  it('13. should change the theme color', () => {
    function stateBefore() {
      return {
        color: '#A3BE89'
      }
    }
    const action = {
      type: 'UPDATE_THEME_COLOR',
      payload: {
        color: '#B38EAE'
      }
    }
    const actual = themeReducer(stateBefore(), action);
    const expected = {
      color: '#B38EAE'
    };
    expect(actual).toEqual(expected);
  })

});