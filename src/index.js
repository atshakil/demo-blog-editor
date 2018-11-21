import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { addLocaleData } from 'react-intl';
import { Quill } from 'react-quill';
import ImageDrop from 'vendor/quill-image-drop-module/ImageDrop';
import ImageResize from 'vendor/quill-image-resize-module/ImageResize';
import VideoResize from 'vendor/quill-video-resize-module/VideoResize';
import en from 'react-intl/locale-data/en';
import vi from 'react-intl/locale-data/vi';
import ja from 'react-intl/locale-data/ja';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import './styles/index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/videoResize', VideoResize);
addLocaleData([...en, ...vi, ...ja]);
library.add(fas);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
