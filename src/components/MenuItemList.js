import React from 'react';
import { connect } from 'react-redux';
import MenuItemListItem from './MenuItemListItem';
import selectMenuItems from '../selectors/menuItems';

export const MenuItemList = props => (
  <div>
    {props.menuItems.length === 0 ? (
      <p>No menu items</p>
    ) : (
      props.menuItems.map(menuItem => {
        return <MenuItemListItem key={menuItem.id} {...menuItem} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    menuItems: selectMenuItems(state.menuItems, state.filters)
  };
};

export default connect(mapStateToProps)(MenuItemList);
