import expect from 'expect';
// import quoteReducer from './quoteReducer';

let quoteReducer;

describe('quoteReducer', () => {
  function stateBefore() {
    return [
      {
        text: 'Lorem ipsum',
        author: 'John Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'Jonas Smith',
        id: 2,
        likeCount: 0
      }
    ];
  }

  it('13. should add quotes by id', () => {
    const action ={
      type: 'ADD_QUOTE_BY_ID',
      payload: {
        text: 'This is a new quote',
        author: 'Someone awesome',
        id: 3,
        likeCount: 0
      }
    };
    const actual = quoteReducer(stateBefore(), action);
    const expected = [
      {
        text: 'Lorem ipsum',
        author: 'John Doe',
        id: 1,
        likeCount: 7
      },
      {
        text: 'Ullamco laboris nisi ut aliquip',
        author: 'Jonas Smith',
        id: 2,
        likeCount: 0
      },
      {
        text: 'This is a new quote',
        author: 'Someone awesome',
        id: 3,
        likeCount: 0
      }
    ];
    expect(actual).toEqual(expected);
  });

  it('13. should return previous state when trying to make a quote like count negative', () => {
    const action = {
      type: 'UNLIKE_QUOTE_BY_ID',
      payload: { id: 2 }
    };
    const actual = quoteReducer(stateBefore(), action);
    const expected = stateBefore();
    expect(actual).toEqual(expected);
  });

});