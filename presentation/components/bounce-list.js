import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'spectacle';
import { Bounce } from './anim';

function BounceList({ items, showFirst }) {
  const renderedItems = items.map((item, i) => {
    const k = `item-bounce-${item}`;
    const h = <Heading size={4} key={k}>{item}</Heading>;
    if (i === 0 && showFirst) {
      return h;
    }
    return (
      <div key={k}><Bounce>{h}</Bounce></div>
    );
  });
  return (
    <div>
      {renderedItems}
    </div>
  );
}

BounceList.defaultProps = {
  showFirst: true,
};

BounceList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  showFirst: PropTypes.bool,
};

export default BounceList;
