import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { incrementDummyValue } from '../../actions/Dummy';
import './assets/dashboard.css';

/**
 * SectionA
 *  PhotoUploader
 *  NameEditor
 * SectionB
 *  ContentEditor
 * SectionC
 *  SubmitButton
 */

export class VisibleDashboard extends Component {
  render() {
    const { dummyValue, incrementDummyValue } = this.props;

    return (
      <Container className='Dashboard'>
        <Row className='section-a'>
          <Col>
            <Row className='photo-uploader'>
            dat
            </Row>
            <Row className='name-editor'>
            editor
            </Row>
          </Col>
        </Row>
        <Row className='section-b'>
          <Col className='content-editor'>
          </Col>
        </Row>
        <Row className='section-c'>
          <Col className='submit-button'>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dummyValue: state.dummy.dummyValue
});

export default withRouter(connect(mapStateToProps, { incrementDummyValue })(VisibleDashboard));




        {/* <header className='App-header'>
          <h1 className='App-title'><FormattedMessage id='dashboard.title' /></h1>
        </header>
        <p className='App-body'>
          Dummy Body
        </p>
        ||{dummyValue}||
        <button onClick={e => incrementDummyValue()}>Increment</button> */}
