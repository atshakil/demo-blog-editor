import React from 'react';
import { Quill } from 'react-quill';
import ImageDrop from 'quill-image-drop-module';
import ImageResize from 'vendor/quill-image-resize-module/ImageResize';
import VideoResize from 'vendor/quill-video-resize-module/VideoResize';
import { testWithIntl } from '../../../services/test';
import ContentEditor from '.';

Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/videoResize', VideoResize);


it('renders without crashing', () => {
  const component = testWithIntl(<ContentEditor />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
