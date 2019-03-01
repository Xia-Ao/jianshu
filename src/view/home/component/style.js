import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0 auto;
  width: 960px;
  overflow: hidden;
  background: #ccc;
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
  background: #eee;
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
    width:280px;
    height: 50px;
    img{
      
    }
  }
`;

