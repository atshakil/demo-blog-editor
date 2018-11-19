import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import Dropzone from 'react-dropzone';
import ReactQuill from 'react-quill';
import { incrementDummyValue } from '../../actions/Dummy';
import { updatePost } from '../../actions/Post';
import './assets/dashboard.css';

export class VisibleDashboard extends Component {
  onDropAccepted(files) {
    // debugger;
    // get data, and put in store
    const
      { post, updatePost } = this.props,
      image = files[0];

    // Prevent memory leak
    if(post.image) URL.revokeObjectURL(post.image.content);

    updatePost({
      image: {
        name: image.name,
        content: URL.createObjectURL(image),
        size: image.size
      }
    });
    console.log('Drop accepted');
  }

  render() {
    const
      { post, updatePost } = this.props,
      { image } = post;

    return (
      <Container className='Dashboard'>
        <Row className='section-a'>
          <Col className=''>
            <Row className='photo-uploader'>
              <Dropzone
                className='dropzone w-100'
                accept='image/*'
                multiple={false}
                onDropAccepted={this.onDropAccepted.bind(this)}>
                {image ?
                  <img src={image.content} className='preview' />
                  :
                  <Col className='dropzone-hint'>
                    <Row><FontAwesomeIcon icon='camera-retro' size='4x' /></Row>
                    <Row>Drop here!</Row>
                  </Col>
                }
              </Dropzone>
            </Row>
            <Row className='name-editor'>
              <Input type='text' value={post.title} onChange={e => updatePost({title: e.target.value})} />
            </Row>
          </Col>
        </Row>
        <Row className='section-b'>
          <Col className='content-editor-wrapper'>
            <ReactQuill
              value={post.content}
              onChange={e => updatePost({content: e.target.value})}
              className='content-editor'
              />
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
  post: state.post
});

export default withRouter(connect(mapStateToProps, { updatePost })(VisibleDashboard));




        {/* <header className='App-header'>
          <h1 className='App-title'><FormattedMessage id='dashboard.title' /></h1>
        </header>
        <p className='App-body'>
          Dummy Body
        </p>
        ||{dummyValue}||
        <button onClick={e => incrementDummyValue()}>Increment</button> */}
