import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import { updatePost, commitPost } from '../../actions/Post';

import VisibleDashboard from 'components/visible_dashboard';


Quill.register('modules/imageDrop', ImageDrop);

const mapStateToProps = state => ({
  post: state.post
});

export default withRouter(connect(mapStateToProps, { updatePost, commitPost })(VisibleDashboard));
