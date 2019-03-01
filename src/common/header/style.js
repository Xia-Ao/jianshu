import styled from 'styled-components';

// 图片地址
import logoImg from '../../static/img/logo.png';

export const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  margin: 0 auto ;
  height: 56px;
  width: 1440px; 
`;

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url("${logoImg}");
  background-size: contain;
  cursor: pointer;
`;

export const Nav = styled.div` 
  margin: 0 240px 0 220px;
  height:56px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  display: inline-block;
  padding: 0 20px;
  font-size: 17px;
  &.left {
    float:left;
    color: #333;
  }
  &.right {
  float: right;
  color: #969696
  }
  &.active {
  color: #ea6f5a
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  //a {
  //  color: inherit;
  //}
  .icon-search {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 5px;
    color: #969696;
    &.focus {
      background: #969696;
      border-radius: 50%;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  width: 240px;
  height: 36px;
  box-sizing: border-box;
  outline: none;
  border-radius: 40px;
  border: 1px solid #eee;
  background: #eee;
  font-size: 14px; 
  &.focus{
    width: 320px;
  }
  &.slide-enter {
    transition: all 0.3s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all 0.3s ease-out;
  }
  &.slide-exit-active{
    width: 240px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px; 
  left: 20px;
  width: 200px;
  padding: 20px 20px 0px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  background-color: #fff;
  //overflow: hidden;
  font-size: 14px;
  &:after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.span`
  float: left;
  color: #969696;
`;

export const SearchInfoSwitch = styled.a`
  cursor: pointer;
  float: right;
  color: #969696;
  &:hover{
    color: #2f2f2f;
  }
  .icon-refresh{
    display: inline-block;
    margin-right: 5px;
    float: left;
    //color: red;
    transition: all 0.3s ease-in;
    transform: rotate(0deg);
    transform-origin: center;
    font-size: 14px;
  }
`;


export const Addition = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
`;

export const SearchInfoList = styled.div`
  position: relative;
  margin-top: 15px;
  float: left;
`;

export const SearchInfoItem = styled.a`
  display: inline-block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 3px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const Button = styled.a`
  margin: 8px 10px 0;
  display: inline-block;
  line-height: 40px;
  padding: 0 20px;
  height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  cursor: pointer;
  &.reg {
    color: #ea6f5a;
    background-color: transparent;
  }
  &.reg:hover{
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
  &.writing {
    color: #fff;
    background-color: #ea6f5a;
  }
  
`;