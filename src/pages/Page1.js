import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { changeLanguage } from '../actions/index.js';
import { connect } from 'react-redux';

class Page1 extends Component {

  handleClick() {
    this.props.history.push('/page2')
  }

  handleLanguageClick() {

    let language = 'en'

    if(this.props.language === 'en') {
      language = 'es'
    } else {
      language = 'en'
    }

    this.props.changeLanguage(language)

  }

  render() {
    console.log(this.props.language);
    return (
      <div>
        <div>
          <h3>
            <FormattedMessage id="Page1.header" defaultMessage="Hello, I am page 1." />
          </h3>
          <RaisedButton label={<FormattedMessage id="Page1.button" defaultMessage="Go to page 2" />} primary={true} onClick={this.handleClick.bind(this)} />
          <RaisedButton label={<FormattedMessage id="Page1.button2" defaultMessage="Click to change language" />} primary={true} onClick={this.handleLanguageClick.bind(this)} style={{marginLeft: 20}}/>
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

const mapStateToProps = state => ({
  language: state.languageReducer.language
 })

 const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(changeLanguage(language))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Page1);