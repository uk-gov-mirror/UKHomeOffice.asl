import { connect } from 'react-redux';
import { setTextFilter } from '../../src/actions';
import TextFilter from '../components/text-filter';

const mapStateToProps = state => ({
  textFilter: state.list.filter
});

export default connect(
  mapStateToProps,
  { setTextFilter }
)(TextFilter);
