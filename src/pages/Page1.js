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
            title="URL Avatar"
            subtitle="Subtitle"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src={require("../placeholder-image.png")} alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          </Card>
        </div>
      </div>
    );
  }
}
 export default Page1;