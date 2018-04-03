const React = require('react');

const SimpleFilters = ({
  filterBy,
  filters
}) => {
  return (
    <React.Fragment>
      <h2>Filters</h2>
      {
        Object.keys(filterBy).map(key => {
          const filter = filterBy[key];
          if (!filter.length) {
            return null;
          }
          const filterSettings = filters.find(f => f.key === key);
          return <div className='filter-group'>
            <h3>{ filterSettings.title }</h3>
            <ul>
              {
                filter.map(value => <li>{ filterSettings.label ? filterSettings.label(value) : value }</li>)
              }
            </ul>
          </div>
        })
      }
    </React.Fragment>
  )
}

module.exports = SimpleFilters;
