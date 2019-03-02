import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from '../store';
import {
  DetailWrapper,
  Title,
  Author,
  TextWrapper,
} from './style'

class ArticleDetail extends PureComponent {

  render () {
    const {author, article} = this.props;
    return (
      <DetailWrapper>
        <Title>{author.title}</Title>
        <Author>
          <a className='avator' href={'//www.jianshu.com/u/' + author.slug} target='_blank'><img
            src={author.avatar_source} alt=""/></a>
          <div className='name'>
            <a className='nickname' href={'//www.jianshu.com/u/' + author.slug} target='_blank'>{author.nickname}</a>
            <a className='follow' href="javascript:;" target='_blank'><i className="iconfont icon-hao"></i>关注</a>
          </div>
          <p className='introduce'>
            <pre><i className="iconfont icon-zuanshi"></i> {author.score}</pre>
            <pre>{author.time}</pre>
            <pre>字数 {Math.floor(author.totalWords / 1000) >= 1 ?
              (author.totalWords / 1000).toFixed(1) + 'k' : author.totalWords}</pre>
            <pre>阅读 {
              Math.floor(author.reader / 1000) >= 1 ?
                (author.reader / 1000).toFixed(1) + 'k' : author.reader
            }</pre>
            <pre>评论 {
              Math.floor(author.comment / 1000) >= 1 ?
                (author.comment / 1000).toFixed(1) + 'k' : author.comment
            }</pre>
            <pre>喜欢 {
              Math.floor(author.like / 1000) >= 1 ?
                (author.like / 1000).toFixed(1) + 'k' : author.like
            }</pre>
          </p>
        </Author>

        <TextWrapper dangerouslySetInnerHTML={{__html: article}}></TextWrapper>
      </DetailWrapper>
    )
  }

  componentWillMount () {
    this.props.articleInit();
  }

}

const mapState = (state) => {
  return {
    author: state.getIn(['detail', 'author']).toJS(),
    article: state.getIn(['detail', 'article'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    articleInit () {
      dispatch(actionCreator.articleInit());
    }
  }
};


export default connect(mapState, mapDispatchToProps)(ArticleDetail);