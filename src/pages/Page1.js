import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';

class Page1 extends Component {

  handleClick() {
    this.props.history.push('/page2')
  }

  render() {
    return (
      <div>
        <h3>
          <FormattedMessage id="Page1.header" defaultMessage="Hello, I am page 1." />
        </h3>
        <RaisedButton label={<FormattedMessage id="Page1.button" defaultMessage="Go to page 2" />} primary={true} onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}
 export default Page1;