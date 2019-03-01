import React, {Component} from 'react'
import {actionCreator} from '../store';
import ArticleItem from './articleItem';
import Menu from './menu';

import {
  HomeContainer,
  LeftWrapper,
  RightWrapper,
} from './style';
import connect from "react-redux/es/connect/connect";


class Home extends Component {

  render () {
    const {menuList, articleSum, authorList, qrCodeImg} = this.props;
    return (
      <HomeContainer>
        <LeftWrapper>
          <img className='banner-img'
               src="//upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt=""/>
          {articleSum.map(item => {
            return <ArticleItem key={item.id} content={item}></ArticleItem>
          })}

        </LeftWrapper>
        <RightWrapper>
          <Menu content={menuList}></Menu>
          <img src={qrCodeImg} alt=""/>
        </RightWrapper>
      </HomeContainer>
    )
  }

  componentDidMount () {
    this.props.homeInfoInit();
  }

}

const mapStateToProps = (state) => {
  return {
    menuList: state.getIn(['home', 'menuList']).toJS(),
    articleSum: state.getIn(['home', 'articleSum']).toJS(),
    authorList: state.getIn(['home', 'authorList']).toJS(),
    qrCodeImg: state.getIn(['home', 'qrCodeImg']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeInfoInit () {
      dispatch(actionCreator.homeInfoInit());
      dispatch(actionCreator.articleSumInit());
      dispatch(actionCreator.authorReward());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);