import React, {Component} from "react";
import {connect} from 'react-redux';
import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Nav, NavItem, NavSearch,
  SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem,
  Addition, Button
} from './style'
import {CSSTransition} from 'react-transition-group';
import {actionCreator} from "./store";


class Header extends Component {
  render () {
    const {focused, list, mouseIn, handlerInputFocus, handlerInputBlur} = this.props;
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <Logo></Logo>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'><i className='iconfont icon-Aa'></i></NavItem>
            <SearchWrapper>
              <CSSTransition in={this.props.focused}
                             timeout={300}
                             classNames="slide">
                <NavSearch className={focused ? 'focus' : ''}
                           onFocus={() => {
                             handlerInputFocus(list)
                           }}
                           onBlur={handlerInputBlur}></NavSearch>
              </CSSTransition>
              <a href="javascript:void(0);">
                <i className={focused ? 'focus iconfont icon-search' : 'iconfont icon-search'}></i>
              </a>
              {this.getSearchInfoList(focused, mouseIn)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className='reg'>注册</Button>
            <Button className='writing'><i className='iconfont icon-yumaobi'></i> 写文章</Button>
          </Addition>
        </HeaderWrapper>
      </HeaderContainer>
    )
  }


  getSearchInfoList = (show, mouseIn) => {
    if (show || mouseIn) {
      const {list, page, totalPage, handlerMouseEnter, handlerMouseLeave, handlerRefresh} = this.props;
      let pageList = [];

      if (list.size > 0) {
        let newList = list.toJS();
        for (let i = (page - 1) * 10; i < page * 10; i++) {
          (newList[i]) && pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
      }

      let icon = React.createRef();

      return (
        <SearchInfo onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoSwitch onClick={() => {
            handlerRefresh(page, totalPage, icon)
          }}><i ref={icon} className='iconfont icon-refresh icon-refresh'></i>换一批</SearchInfoSwitch>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  };
}

// const Header = (props) => {
//
// };


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerInputFocus (list) {
      dispatch(actionCreator.searchFocus());
      (list.size === 0) && dispatch(actionCreator.getSearchList());
    },
    handlerInputBlur () {
      dispatch(actionCreator.searchBlur());
    },
    handlerMouseEnter () {
      dispatch(actionCreator.mouseEnter())
    },
    handlerMouseLeave () {
      dispatch(actionCreator.mouseOut())
    },
    handlerRefresh (page, totalPage, icon) {
      console.log(icon.current.style.transform);
      let rotateDeg = icon.current.style.transform.replace(/[^0-9]/ig, '');
      if (rotateDeg) {
        rotateDeg = parseInt(rotateDeg, 10);

      } else {
        rotateDeg = 0;
      }
      icon.current.style.transform = `rotate(${rotateDeg + 180}deg)`;

      if (page < totalPage) {
        dispatch(actionCreator.pageChange(page + 1))
      } else {
        dispatch(actionCreator.pageChange(1))
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);