import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage, injectIntl } from 'react-intl';
import './assets/header.css';

class VisibleLogin extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="VisibleHeader">
        Dummy
      </div>
    );
  }
}

export default injectIntl(VisibleLogin);
