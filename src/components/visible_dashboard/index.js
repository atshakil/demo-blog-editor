import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import PhotoUploader from '../shared/photo_uploader';
import ContentEditor from '../shared/content_editor';
import './assets/dashboard.css';

export default class VisibleDashboard extends Component {
  render() {
    const
      { post, updatePost, commitPost } = this.props;

    if(!post) return null;

    return (
      <Container className='Dashboard'>
        <Row className='section-a'>
          <Col className='section-wrapper'>
            <PhotoUploader photo={post.image} onDrop={updatePost} />
            <Row className='name-editor'>
              <Input type='text' value={post.title} onChange={e => updatePost({title: e.target.value})} />
            </Row>
          </Col>
        </Row>
        <Row className='section-b'>
          <ContentEditor
            post={post.content}
            onChange={content => updatePost({content})}
            placeholder={'Enter news content here...'} />
        </Row>
        <Row className='section-c'>
          <Col className='buttons'>
            <Button id='submit' onClick={e => commitPost(post)}>Submit</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
