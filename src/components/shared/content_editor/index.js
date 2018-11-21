import React, { Component } from 'react';
import { Col } from 'reactstrap';
import ReactQuill from 'react-quill';
import './assets/content_editor.css';

export default class ContentEditor extends Component {
  render() {
    const
      { content, onChange, placeholder } = this.props;

    // if(!post) return null;

    return (
      <Col className='content-editor-wrapper'>
        <ReactQuill
          value={content}
          onChange={changedContent => onChange ? onChange(changedContent) : null}
          className='content-editor'
          placeholder={placeholder ? placeholder : ''}
          modules={{
            imageDrop: true,
            imageResize: {
              modules: ['Resize', 'DisplaySize']
            },
            videoResize: {
              modules: ['Resize', 'DisplaySize']
            },
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
    );
  }
}
