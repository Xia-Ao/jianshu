import CONSTANT from './constant';
import axios from 'axios';
import {fromJS} from 'immutable';

const searchInfo = data => {
  return {
    type: CONSTANT.SEARCH_INFO,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
};


export const searchFocus = () => {
  return {
    type: CONSTANT.SEARCH_FOCUS
  };
};

export const searchBlur = () => {
  return {
    type: CONSTANT.SEARCH_BLUR,
  }
};

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/mock/searchInfo.json')
      .then(res => {
        if (res.status === 200) {
          dispatch(searchInfo(res.data.data));
        } else {
          console.log('返回数据不正确！')
        }
      })
      .catch((err) => {
        console.log('请求出错')
      })

  }
};

export const mouseEnter = () => {
  return {
    type: CONSTANT.MOUSE_IN
  }
};
export const mouseOut = () => {
  return {
    type: CONSTANT.MOUSE_OUT
  }
};

export const pageChange = (page) => {
  return {
    type: CONSTANT.PAGE_CHANGE,
    page
  }
};