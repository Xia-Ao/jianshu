import CONSTANT from './constant';
import axios from 'axios';
import {fromJS} from 'immutable';

const articleInfo = (data) => {
  return {
    type: CONSTANT.ARTICLE_INIT,
    author: fromJS(data.author),
    article: data.article
  }
};


export const articleInit = (num = '1') => {
  return (dispatch) => {
    axios.get(`/mock/article${num}.json`)
      .then(res => {
        if (res.status === 200) {
          dispatch(articleInfo(res.data.data))
        } else {
          console.log('数据返回错误')
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
};

