import React from 'react';

export default class MenuItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu_item: props.menuItem ? props.menuItem.menu_item : '',
      restaurant_name: props.menuItem ? props.menuItem.restaurant_name : '',
      calories: props.menuItem ? props.menuItem.calories : '',
      protein: props.menuItem ? props.menuItem.protein : '',
      fat: props.menuItem ? props.menuItem.fat : '',
      carbs: props.menuItem ? props.menuItem.carbs : '',
      error: ''
    };
  }

  onRestaurantNameChange = e => {
    const restaurant_name = e.target.value;
    this.setState(() => ({ restaurant_name }));
  };

  onMenuItemChange = e => {
    const menu_item = e.target.value;
    this.setState(() => ({ menu_item }));
  };

  onCalorieChange = e => {
    const calories = e.target.value;
    this.setState(() => ({ calories }));
  };

  onProteinChange = e => {
    const protein = e.target.value;
    this.setState(() => ({ protein }));
  };

  onFatChange = e => {
    const fat = e.target.value;
    this.setState(() => ({ fat }));
  };

  onCarbChange = e => {
    const carbs = e.target.value;
    this.setState(() => ({ carbs }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (
      !this.state.restaurant_name ||
      !this.state.menu_item ||
      !this.state.calories ||
      !this.state.protein ||
      !this.state.fat ||
      !this.state.carbs
    ) {
      this.setState(() => ({ error: 'You are missing a field' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        restaurant_name: this.state.restaurant_name,
        menu_item: this.state.menu_item,
        calories: this.state.calories,
        protein: this.state.protein,
        fat: this.state.fat,
        carbs: this.state.carbs
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Restaurant name"
            autoFocus
            value={this.state.restaurant_name}
            onChange={this.onRestaurantNameChange}
          />
          <input
            type="text"
            placeholder="Menu Item name"
            value={this.state.menu_item}
            onChange={this.onMenuItemChange}
          />
          <input
            type="number"
            placeholder="Calories"
            value={this.state.calories}
            onChange={this.onCalorieChange}
          />
          <input
            type="number"
            placeholder="Protein"
            value={this.state.protein}
            onChange={this.onProteinChange}
          />
          <input
            type="number"
            placeholder="Fat"
            value={this.state.fat}
            onChange={this.onFatChange}
          />
          <input
            type="number"
            placeholder="Carbs"
            value={this.state.carbs}
            onChange={this.onCarbChange}
          />
          <button>Add Menu Item</button>
        </form>
      </div>
    );
  }
}
