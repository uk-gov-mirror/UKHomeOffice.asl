import { connect } from 'react-redux';
import ListTable from '../components/list-table';
import { setSortColumn } from '../../src/actions';

const mapStateToProps = ({ list: { sort: { column, ascending } } }) => ({
  column,
  ascending
});

export default connect(
  mapStateToProps,
  { setSortColumn }
)(ListTable);
