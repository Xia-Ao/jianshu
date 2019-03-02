import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import {
  ArticleWrapper,
  ArticleTitle,
  Summary,
  OpList,

} from './style'

class ArticleItem extends PureComponent {

  render () {
    let item = this.props.content;
    return (
      <ArticleWrapper>
        <img className={item.imgUrl ? 'summary-img' : ''}
             src={item.imgUrl}
             alt=""/>
        <div>
          <Link to='detail'><ArticleTitle>{item.title}</ArticleTitle></Link>
          <Summary>{item.summary}</Summary>
          <OpList>
            <span className='zuanshi'><i className="iconfont icon-zuanshi"></i>{item.score}</span>
            <a href='javascript:;'>{item.author}</a>
            <a href='javascript:;'><i className="iconfont icon-xiaoxi"></i>{item.comment}</a>
            <a href='javascript:;'><i className="iconfont icon-xin-copy"></i>{item.like}</a>
            <a href='javascript:;' className={item.reward > 0 ? '' : 'hidden'}><i
              className="iconfont icon-shang"></i>{item.reward}</a>
          </OpList>
        </div>
      </ArticleWrapper>
    )
  }
}


export default ArticleItem;