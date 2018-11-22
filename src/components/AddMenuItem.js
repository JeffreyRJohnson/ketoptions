import React from 'react';
import { connect } from 'react-redux';
import MenuItemForm from './MenuItemForm';
import { startAddMenuItem } from '../actions/menuItems';

export class AddMenuItem extends React.Component {
  onSubmit = menuItem => {
    this.props.startAddMenuItem(menuItem);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Menu Item</h1>
        <MenuItemForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddMenuItem: menuItem => dispatch(startAddMenuItem(menuItem))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddMenuItem);
