import CONSTANT from './constant';
import axios from 'axios';
import {fromJS} from 'immutable';

const homeInfo = (data) => {
  return {
    type: CONSTANT.HOME_INFO,
    menu: fromJS(data.menu),
    qrCodeImg: fromJS(data.qrCode.imgUrl)
  }
};

const articleSum = (data) => {
  return {
    type: CONSTANT.ARTICLE_SUM,
    data: fromJS(data)
  }
};

const authorList = (data) => {
  return {
    type: CONSTANT.AUTHOR_LIST,
    data: fromJS(data)
  }
};

const findMoreAuthor = (data) => {
  return {
    type: CONSTANT.FIND_MORE,
    data: fromJS(data)
  }
};

export const homeInfoInit = () => {
  return (dispatch) => {
    axios.get('/mock/homeInfo.json')
      .then((res) => {
        if (res.status === 200) {
          dispatch(homeInfo(res.data.data));
        } else {
          console.log('返回数据错误')
        }
      }).catch((err) => {
      console.log(err);
    })
  }
};

export const articleSumInit = () => {
  return (dispatch) => {
    axios.get('/mock/articleSum.json')
      .then((res) => {
        if (res.status === 200) {
          dispatch(articleSum(res.data.data));
        } else {
          console.log('返回数据错误')
        }
      }).catch((err) => {
      console.log(err);
    })
  }
};

export const authorReward = () => {
  return (dispatch) => {
    axios.get('/mock/authorList.json')
      .then((res) => {
        if (res.status === 200) {
          dispatch(authorList(res.data.data));
        } else {
          console.log('返回数据错误')
        }
      }).catch((err) => {
      console.log(err);
    })
  }
};

export const findMore = () => {
  return (dispatch) => {
    axios.get('/mock/moreAuthor.json')
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          dispatch(findMoreAuthor(res.data.data));
        } else {
          console.log('返回数据错误')
        }
      }).catch((err) => {
      console.log(err);
    })
  }
};

export const topShow = (flag) => {
  return {
    type: CONSTANT.TOP_SHOW,
    flag
  }
};

