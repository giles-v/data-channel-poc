import React, { Component } from 'react';
import Card from './Card';
import { autoCrumb } from './breadcrumbs';

class UnitTwo extends Component {
  render() {
    return (
      <Card {...autoCrumb(this.props, 'unitTwo')} />
    );
  }
}

export default UnitTwo;
