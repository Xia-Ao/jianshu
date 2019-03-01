import React, {Component} from 'react';
import {MenuWrapper} from './style';

class Menu extends Component {

  render () {
    const menu = this.props.content;
    console.log(menu)
    return (
      <MenuWrapper>
        {menu.map(item => {
          return <a href="" key={item.id}><img src={item.itemUrl} alt=""/></a>
        })}
      </MenuWrapper>
    )
  }

}

export default Menu;