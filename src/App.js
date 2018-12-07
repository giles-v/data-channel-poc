import React, { Component } from 'react';
import UnitOne from './UnitOne';
import UnitTwo from './UnitTwo';
import { autoCrumb } from './breadcrumbs';

class App extends Component {
  render() {
    return (
      <div>
        <UnitOne {...autoCrumb(this.props, 'app')} />
        <UnitTwo {...autoCrumb(this.props, 'app')} />
      </div>
    );
  }
}

export default App;
