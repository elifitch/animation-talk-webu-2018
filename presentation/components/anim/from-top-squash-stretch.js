import React from 'react';
import PropTypes from 'prop-types';
import PowerTween from '../power-tween';
import IB from '../primitives/inline-block';

function FromTopSquashStretch(props) {
  const tweenBySeriousness = {
    serious: {
      scaleX: 0.95,
      scaleY: 1.05,
      y: '-20%',
      ease: Elastic.easeOut.config(1, 0.8),
    },
    medium: {
      scaleX: 0.9,
      scaleY: 1.1,
      y: '-20%',
      ease: Elastic.easeOut.config(1, 0.6),
    },
    fun: {
      scaleX: 0.8,
      scaleY: 1.2,
      y: '-20%',
      ease: Elastic.easeOut.config(1, 0.4),
    },
  };
  
  return (
    <PowerTween
      inline
      anims={[
        [
          {
            method: 'from',
            target: child => child,
            duration: 1.0,
            args: [tweenBySeriousness[props.character]],
          },
          {
            method: 'from',
            target: child => child,
            duration: 0.3,
            args: [{
              opacity: 0, ease: Power2.easeOut,
            }, '-=1'],
          },
        ],
      ]}
    >
      <IB>{props.children}</IB>
    </PowerTween>
  );
}

FromTopSquashStretch.defaultProps = {
  character: 'medium',
};
FromTopSquashStretch.propTypes = {
  children: PropTypes.node.isRequired,
  character: PropTypes.oneOf(['serious', 'medium', 'fun']),
};

export default FromTopSquashStretch;
