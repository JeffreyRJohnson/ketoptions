import React from 'react';
import { Link } from 'react-router-dom';

const MenuItemListItem = ({
  id,
  menu_item,
  restaurant_name,
  calories,
  carbs,
  fat,
  protein
}) => (
  <div>
    {/* <h2>{restaurant_name}</h2> */}
    <Link to={`/edit/${id}`}>
      <h3>{menu_item}</h3>
    </Link>
    <p>
      calories - {calories} protein - {protein} fat - {fat} carbs - {carbs}
    </p>
  </div>
);

export default MenuItemListItem;
