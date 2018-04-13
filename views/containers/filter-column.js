import { connect } from 'react-redux';
import FilterColumn from '../components/filter-column';
import { toggleFilter } from '../../src/actions/filters';

const mapStateToProps = (state, { filter: { key } }) => ({
  filterBy: state.filters.filterBy[key]
});

export default connect(
  mapStateToProps,
  { toggleFilter }
)(FilterColumn);
