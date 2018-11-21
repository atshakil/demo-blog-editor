import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropzone from 'react-dropzone';
import './assets/photo_uploader.css';

export default class PhotoUploader extends Component {
  onDropAccepted(files) {
    const
      { post, onDrop } = this.props,
      image = files[0];

    // Prevent memory leak
    if(post.image) URL.revokeObjectURL(post.image.content);

    onDrop({
      image: {
        name: image.name,
        content: URL.createObjectURL(image),
        size: image.size
      }
    });
  }
  Điền
  render() {
    const { photo, className } = this.props;

    return (
      <Row className={className ? className : 'photo-uploader'}>
        <Dropzone
          className='dropzone w-100'
          accept='image/*'
          multiple={false}
          onDropAccepted={this.onDropAccepted.bind(this)}>
          {photo ?
            <img src={photo.content} className='preview' />
            :
            <Col className='dropzone-hint'>
              <Row className='hint hint-icon'><FontAwesomeIcon icon='camera-retro' size='4x' /></Row>
              <Row className='hint'>Úp hình thành phẩm</Row>
            </Col>
          }
        </Dropzone>
      </Row>
    );
  }
}
