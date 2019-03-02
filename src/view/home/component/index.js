import React, {PureComponent} from 'react'
import {actionCreator} from '../store';
import ArticleItem from './articleItem';
import Menu from './menu';
import Author from './author';

import {
  HomeContainer,
  LeftWrapper,
  RightWrapper,
  ToTop,
} from './style';
import connect from "react-redux/es/connect/connect";


class Home extends PureComponent {

  render () {
    const {menuList, articleSum, authorList, qrCodeImg, topShow} = this.props;
    console.log(topShow)
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
          {/*右侧app下载提示*/}
          <a className="download">
            <img className='qr-img' src={qrCodeImg} alt=""/>
            <div className="qr-info">
              <div className='info1'>下载简书手机APP</div>
              <div className='info2'>随时随地发现内容</div>
            </div>
          </a>
          <Author content={authorList}>
          </Author>
        </RightWrapper>
        {topShow ? <ToTop onClick={this.goToTop}> <i className="iconfont icon-arraw_top"></i></ToTop> : ''}
        {/*<ToTop> <i className="iconfont icon-arraw_top"></i></ToTop>*/}
      </HomeContainer>
    )
  }

  componentDidMount () {
    this.props.homeInfoInit();
    window.addEventListener('scroll', this.props.scrollEvent)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.scrollEvent)
  }

  goToTop = () => {
    window.scrollTo(0, 0);
  }

}

const mapStateToProps = (state) => {
  return {
    menuList: state.getIn(['home', 'menuList']).toJS(),
    articleSum: state.getIn(['home', 'articleSum']).toJS(),
    authorList: state.getIn(['home', 'authorList']).toJS(),
    qrCodeImg: state.getIn(['home', 'qrCodeImg']),
    topShow: state.getIn(['home', 'topShow'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeInfoInit () {
      dispatch(actionCreator.homeInfoInit());
      dispatch(actionCreator.articleSumInit());
      dispatch(actionCreator.authorReward());
    },
    scrollEvent () {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreator.topShow(true))
      } else {
        dispatch(actionCreator.topShow(false))
      }

    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);