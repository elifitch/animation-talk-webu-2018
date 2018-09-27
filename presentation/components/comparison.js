import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

class Comparison extends React.Component {
  render() {
    const { children } = this.props;

    if (children.length !== 3) {
      console.error('must have exactly 3 children.'); // eslint-disable-line
    }

    const ComparatorWrapper = styled('div')`
      width: 20%;
    `;

    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>{children[0]}</div>
        <ComparatorWrapper>{children[1]}</ComparatorWrapper>
        <div>{children[2]}</div>
      </div>
    );
  }
}

// ImageRow.defaultProps = {
//   offset: 5,
//   distribute: 'space-between',
//   styleOverrides: [],
//   showFirst: true,
// };
Comparison.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Comparison;
