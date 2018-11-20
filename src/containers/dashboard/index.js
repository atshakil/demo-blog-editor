import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import Dropzone from 'react-dropzone';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import { incrementDummyValue } from '../../actions/Dummy';
import { updatePost } from '../../actions/Post';
import './assets/dashboard.css';

Quill.register('modules/imageDrop', ImageDrop);


export class VisibleDashboard extends Component {
  onDropAccepted(files) {
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
              onChange={content => updatePost({content})}
              className='content-editor'
              modules={{
                imageDrop: true,
                toolbar: [
                  [{ 'header': 1 }, { 'header': 2 }],
                  [{ 'font': [] }],
                  [{ 'size': ['small', false, 'large', 'huge'] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'indent': '-1'}, { 'indent': '+1' }],
                  ['link', 'image', 'video'],
                  ['clean']
                ]
              }}
              />
          </Col>
        </Row>
        <Row className='section-c'>
          <Col className='submit-button'>
            <Button color='success'>Submit</Button>
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
