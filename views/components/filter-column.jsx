import React from 'react';
import CheckboxGroup from 'govuk-react-components/components/forms/radio-group';
import MoreLink from './more-link';

class FilterColumn extends React.Component {
  componentDidMount() {
    this.setState({ showMore: false });
  }

  handleClickMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }

  render() {
    const {
      columnClass,
      filterBy,
      toggleFilter,
      filter: {
        key,
        title,
        label,
        values
      }
    } = this.props;

    const displayValues = this.state && !this.state.showMore && values.length > 4 ? values.slice(0, 4) : values;

    return (
      <div className={ columnClass }>
        <CheckboxGroup
          name={ key }
          type='checkbox'
          label={ title }
          options={ displayValues.map(value => ({ value, label: label ? label(value) : value })) }
          value={ filterBy }
          onChange={ e => toggleFilter(key, e.target.value) }
        />
        {
          !this.state ? null : values.length > 4 &&
          <MoreLink
            handleClick={ () => this.handleClickMore() }
            showing={ this.state && this.state.showMore }
          />
        }
      </div>
    );
  }
}

export default FilterColumn;
