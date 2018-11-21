import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import './assets/header.css';

class VisibleLogin extends Component {
  render() {
    return (
      <div className="VisibleHeader">
        {/* Dummy */}
      </div>
    );
  }
}

export default injectIntl(VisibleLogin);
