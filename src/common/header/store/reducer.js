import CONSTANT from './constant';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 0
});

export default (state = defaultState, action) => {

  switch (action.type) {
    // 输入框焦点变化
    case CONSTANT.SEARCH_FOCUS:
      return state.set('focused', true);
    case CONSTANT.SEARCH_BLUR:
      return state.merge({'focused': false});
    // 获取推荐选项
    case CONSTANT.SEARCH_INFO:
      return state.merge({list: action.data, totalPage: action.totalPage});
    // 鼠标在选项框上移出
    case CONSTANT.MOUSE_IN:
      return state.set('mouseIn', true);
    case CONSTANT.MOUSE_OUT:
      return state.set('mouseIn', false);
    //  点击换一换，page发生改变
    case CONSTANT.PAGE_CHANGE:
      return state.set('page', action.page);
    default:
      return state;
  }


  // if (action.type === CONSTANT.SEARCH_FOCUS) {
  //
  //
  //   return newState;
  // }
  //
  // if (action.type === CONSTANT.SEARCH_BLUR) {
  //   let newState = JSON.parse(JSON.stringify(state));
  //   newState.focused = false;
  //   return newState;
  // }
  //
  //
  // return state
}
