import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, commitPost } from '../../actions/Post';

import VisibleDashboard from 'components/visible_dashboard';

const mapStateToProps = state => ({
  post: state.post
});

export default withRouter(connect(mapStateToProps, { updatePost, commitPost })(VisibleDashboard));
