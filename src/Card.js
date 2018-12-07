import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <fieldset>
        <legend>Card</legend>
        The path for this card is <code>{this.props.crumb}</code>
      </fieldset>
    );
  }
}

export default Card;
