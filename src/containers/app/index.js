import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Dashboard from '../dashboard';
import NotFound from '../not_found';
import Header from '../header';
import Settings from '../../config/settings';

class App extends Component {
  render() {
    const { locale, translations } = this.props;

    return (
      <IntlProvider locale={locale} key={locale} messages={translations}>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
          <ToastContainer
            position={Settings.notification_position_default}
            transition={Settings.notification_transition_default}
            autoClose={Settings.notification_timeout_default} />
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.intl.locale,
  translations: state.intl.messages
});

export default connect(mapStateToProps)(App);
