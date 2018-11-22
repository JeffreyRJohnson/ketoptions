// Get visible menuItems

export default (menuItems, { text }) => {
  return menuItems.filter(menuItem => {
    const textMatch = menuItem.restaurant_name
      .toLowerCase()
      .includes(text.toLowerCase());

    return textMatch;
  });
};
