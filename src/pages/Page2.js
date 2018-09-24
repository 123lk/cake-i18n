import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Page2 extends Component {
  render() {
    return (
      <div>
        <h3>
        <FormattedMessage id="Page2.header" defaultMessage="Hello, I am page 2." />
        </h3>
        <Link to="/">Go to page 1</Link>
      </div>
    );
  }
}
 export default Page2;