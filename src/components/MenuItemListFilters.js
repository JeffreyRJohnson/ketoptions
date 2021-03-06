import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class MenuItemListFilters extends React.Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItemListFilters);
