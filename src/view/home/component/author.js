import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from '../store'
import {
  AuthorWrapper,
  AuthorList,
  FindMore,
} from './style';

class Author extends PureComponent {

  render () {
    const authorList = this.props.content;
    const {findMore} = this.props;
    return (
      <AuthorWrapper>
        <div className="title">
          <span className='t1'>推荐作者</span>
          <a className='t2' href="javascript:;"><i className="iconfont icon-shuaxin1"></i> 换一批</a>
        </div>
        {authorList.map(author => {
          return (
            <AuthorList key={author.id}>
              <a className='avator' href={'//www.jianshu.com/u/' + author.slug} target='_blank'><img
                src={author.avatar_source} alt=""/></a>
              <a className='follow' href="javascript:;" target='_blank'><i className="iconfont icon-hao"></i>关注</a>
              <a className='nickname' href={'//www.jianshu.com/u/' + author.slug} target='_blank'>{author.nickname}</a>
              <p
                className='introduce'>
                写了{Math.floor(author.total_wordage / 1000) >= 1 ?
                (author.total_wordage / 1000).toFixed(1) + 'k' : author.total_wordage}字  &nbsp;&nbsp;
                {Math.floor(author.total_likes_count / 1000) >= 1 ?
                  (author.total_likes_count / 1000).toFixed(1) + 'k' : author.total_likes_count}喜欢</p>
            </AuthorList>)
        })}

        <FindMore onClick={findMore}>查看全部 <i className="iconfont icon-arraw-1"></i></FindMore>

      </AuthorWrapper>
    )
  }

}

const mapState = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    findMore () {
      dispatch(actionCreator.findMore())
    }
  }
};

export default connect(mapState, mapDispatchToProps)(Author);