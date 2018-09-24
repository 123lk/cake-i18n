import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';

class Page2 extends Component {

  handleClick() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h3>
          <FormattedMessage id="Page2.header" defaultMessage="Hello, I am page 2." />
        </h3>
        <RaisedButton label={<FormattedMessage id="Page2.button" defaultMessage="Go to page 1" />} primary={true} onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}
 export default Page2;