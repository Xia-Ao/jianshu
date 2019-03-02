import React, {PureComponent} from 'react';
import {MenuWrapper} from './style';

class Menu extends PureComponent {

  render () {
    const menu = this.props.content;
    return (
      <MenuWrapper>
        {menu.map(item => {
          return <a href='javascript:;' key={item.id}><img src={item.itemUrl} alt=""/></a>
        })}
      </MenuWrapper>
    )
  }

}

export default Menu;