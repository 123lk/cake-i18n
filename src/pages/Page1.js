import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Page1 extends Component {

  handleClick() {
    this.props.history.push('/page2')
  }

  render() {
    return (
      <div>
        <div>
          <h3>
            <FormattedMessage id="Page1.header" defaultMessage="Hello, I am page 1." />
          </h3>
          <RaisedButton label={<FormattedMessage id="Page1.button" defaultMessage="Go to page 2" />} primary={true} onClick={this.handleClick.bind(this)} />
        </div>
        <div>
          <Card style={{height: 500, width: 300, marginLeft: 200}}>
            <CardHeader
              title={<FormattedMessage id="Page1.cardHeader" defaultMessage="Card header" />}
              subtitle={<FormattedMessage id="Page1.cardHeaderSubtitle" defaultMessage="Card header subtitle" />}
            />
            <CardMedia
              overlay={<CardTitle title={<FormattedMessage id="Page1.cardTitleOverlay" defaultMessage="Card title overlay" />} subtitle={<FormattedMessage id="Page1.cardOverlaySubtitle" defaultMessage="Card title subtitle" />} />}
            >
              <img src={require("../placeholder-image.png")} alt="" />
            </CardMedia>
            <CardTitle title={<FormattedMessage id="Page1.mainCardTitle" defaultMessage="main card title" />} subtitle={<FormattedMessage id="Page1.mainCardSubtitle" defaultMessage="main card subtitle" />} />
            <CardText>
              <FormattedMessage id="Page1.cardText" defaultMessage="English text" />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}
 export default Page1;