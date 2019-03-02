import CONSTANT from './constant';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  author: {},
  article: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANT.ARTICLE_INIT:
      return state.merge({author: action.author, article: action.article});
    default:
      return state;
  }
}