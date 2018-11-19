import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VisibleHeader from '../../components/visible_header';

export default withRouter(connect()(VisibleHeader));
