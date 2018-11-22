import React from 'react';
import { connect } from 'react-redux';
import MenuItemForm from './MenuItemForm';
import { editMenuItem, removeMenuItem } from '../actions/menuItems';

export class EditMenuItem extends React.Component {
  onSubmit = menuItem => {
    this.props.editMenuItem(this.props.menuItem.id, menuItem);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeMenuItem({ id: this.props.menuItem.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <MenuItemForm menuItem={this.props.menuItem} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  menuItem: state.menuItems.find(
    menuItem => menuItem.id === props.match.params.id
  )
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, menuItem) => dispatch(editMenuItem(id, menuItem)),
  removeMenuItem: data => dispatch(removeMenuItem(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMenuItem);
