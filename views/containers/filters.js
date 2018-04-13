import { connect } from 'react-redux';
import { uniq, flatten } from 'lodash';
import Filters from '../components/filters';

const uniqueByType = (filter, rows) => ({
  title: filter.title,
  label: filter.label,
  key: filter.key,
  values: uniq(flatten(rows.map(r => r[filter.key])))
});

const mapStateToProps = (state, { filters }) => ({
  filters: filters.map(filter => uniqueByType(filter, state.places))
});

export default connect(
  mapStateToProps
)(Filters);
