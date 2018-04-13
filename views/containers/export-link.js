import { connect } from 'react-redux';
import ExportLink from '../components/export-link';

const mapStateToProps = state => ({
  filter: state.list.filter,
  sort: state.list.sort
});

export default connect(
  mapStateToProps
)(ExportLink);
