import React, {Component} from 'react';
import {
  ArticleWrapper,
  ArticleTitle,
  Summary,
  OpList,

} from './style'

class ArticleItem extends Component {

  render () {
    let item = this.props.content;
    return (
      <ArticleWrapper>
        <img className={item.imgUrl ? 'summary-img' : ''}
             src={item.imgUrl}
             alt=""/>
        <div>
          <ArticleTitle>{item.title}</ArticleTitle>
          <Summary>{item.summary}</Summary>
          <OpList>
            <span className='zuanshi'><i className="iconfont icon-zuanshi"></i>{item.score}</span>
            <a>{item.author}</a>
            <a><i className="iconfont icon-xiaoxi"></i>{item.comment}</a>
            <a><i className="iconfont icon-xin-copy"></i>{item.like}</a>
            <a className={item.reward > 0 ? '' : 'hidden'}><i className="iconfont icon-shang"></i>{item.reward}</a>
          </OpList>
        </div>
      </ArticleWrapper>
    )
  }
}


export default ArticleItem;