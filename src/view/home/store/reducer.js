import CONSTANT from './constant';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  articleSum: [],
  authorList: [],
  menuList: [],
  qrCodeImg: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANT.HOME_INFO :
      return state.merge({menuList: action.menu, qrCodeImg: action.qrCodeImg});
    case CONSTANT.ARTICLE_SUM:
      return state.set('articleSum', action.data);
    case CONSTANT.AUTHOR_LIST:
      return state.set('authorList', action.data);
    default:
      return state;
  }
}