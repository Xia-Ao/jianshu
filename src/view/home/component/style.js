import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 960px;
  overflow: hidden;
  //background: #ccc;
`;

export const LeftWrapper = styled.div`
  width: 625px;
  float: left;
  .banner-img{
    //display: inline-block;
    margin-bottom: 20px;
    width: 625px;
    height: 270px;
    border-radius: 5px
  }
`;

export const RightWrapper = styled.div`
  width: 280px;
  float: right;
  //background: #eee;
  .download{
    display: block;
    margin-bottom: 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    .qr-img{
      width: 60px;
      height:60px;
      float:left;
      margin-right: 15px;
    }
    .qr-info {
      margin-top: 10px ;
      .info1{
        font-size: 15px;
        line-height: 20px;
        color: #333;
      }
      .info2{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
      }
    }
  }
`;

export const ToTop = styled.div`
  line-height: 25px;
  //vertical-align:middle;
  text-align: center;
  position: fixed;
  right: 200px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 5px;
  background: #fff;
  font-size:30px;
  color: #999;
  cursor: pointer;
  &:hover{
    background: #eee
  }
`;


/**************** articleItem样式 ***********************/
export const ArticleWrapper = styled.div`
  position: relative;
  padding: 20px 0;
  border-top: 1px solid #f0f0f0 ;
  overflow: hidden;
  width: 625px;
  &:last-child{
    border-top: 1px solid #f0f0f0;
  }
  .summary-img {
    display: inline-block;
    margin-left:10px;
    float: right;
    border-radius: 4px;
    width: 150px;
    height: 100px;
  }
`;


export const ArticleTitle = styled.a`
  display: block;
  margin-top: -7px;
  line-height: 1.5;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;
export const Summary = styled.div`
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;
export const OpList = styled.div`
  margin-top: 10px;
  color: #999;
  font-size: 12px;
   span ,a {
    padding-right: 10px;
    i{
      margin-right: 5px
    }
   }
   a{
    cursor: pointer;
   }
   a:hover{
    color: #777;
   }
   .zuanshi {
      color: #ea6f5a;
   }
   .hidden{
      visibility: hidden;
   }
`;


/***************** menu样式 ***********************/
export const MenuWrapper = styled.div`
  a {
    display: block;
    margin-bottom:6px;
    img{
      width:280px;
      height: 50px;
    }
  }
`;

/***************** author 样式 ***********************/
export const AuthorWrapper = styled.div`
  .title{
    margin-bottom: 10px;
    overflow:hidden;
    font-size: 14px;
    color: #969696;
    .t1 {
    float: left;
    }
    .t2{
      float: right;
    }
  }
`;

export const AuthorList = styled.div`
  margin-bottom: 10px;
   height: 48px;
   overflow: hidden;
  .avator {
    display: inline-block;
    margin-right: 10px;
    float: left;
    width: 48px;
    height: 48px;
    img{
      box-sizing: border-box;
      width: 100%;
      height:100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .follow {
    float: right;
    margin-top: 11px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .nickname{
    padding-top: 11px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  .introduce {
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
  } 
`;


export const FindMore = styled.div`
  box-sizing: border-box;
  padding: 7px 7px 7px 12px;
  width: 280px;
  line-height: 20px;
  text-align: center;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  i {
    font-size: 12px;
  }
`;

