import React from 'react';
import MenuItemList from './MenuItemList';
import MenuItemListFilters from './MenuItemListFilters';

const DashboardPage = () => (
  <div>
    <MenuItemListFilters />
    <MenuItemList />
  </div>
);

export default DashboardPage;
