import React, { Component } from 'react';
import Card from './Card';
import { autoCrumb } from './breadcrumbs';

class UnitOne extends Component {
  render() {
    return (
      <Card {...autoCrumb(this.props, 'unitOne')} />
    );
  }
}

export default UnitOne;
