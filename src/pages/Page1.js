import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class Page1 extends Component {
  render() {
    return (
      <div>
        <h3>
          <FormattedMessage id="Page1.header" defaultMessage="Hello, I am page 1." />
        </h3>
        <Link to="/page2">Go to page 2</Link>
      </div>
    );
  }
}
 export default Page1;