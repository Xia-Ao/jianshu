import styled from 'styled-components'

export const DetailWrapper = styled.div`
  margin: 20px auto;
  width: 600px;
  backgroud: #ccc;
`;

export const Title = styled.h1`
  word-break: break-word;
  margin: 40px 0 0 ;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
`;

export const Author = styled.div`
  margin: 30px auto  40px;
  width: 620px;
  height: 40px;
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
  .name{
    padding-top:7px;
    padding-bottom: 5px;
  }
  .follow {
    margin-top: 11px;
    box-sizing: border-box;
    text-align: center;
    padding: 2px 7px 2px 5px;
    font-size: 12px;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    border-color: #42c02e;
    i{
      font-size: 10px;
      margin-right: 2px;
    }
  }
  .nickname{
    padding-top: 30px;
    margin-right: 10px;
    font-size: 16px;
    
  }
  .introduce {
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
    pre:first-child {
      color: #ea6f5a;
    }
    pre {
     display: inline;
     margin-right: 7px;
    }
  } 
  
`;

export const TextWrapper = styled.div`
  h6 {
    margin: 30px auto 25px;
    font-weight: 700;
  }
  img {
    margin:25px 0 25px -50px;
    width: 700px;
  }
  p{
    margin: 0 0 25px;
    color: #2f2f2f;
    word-break: break-word;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }
`;