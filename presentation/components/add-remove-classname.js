import React from 'react';
import PropTypes from 'prop-types';
import CallFn from './anim/call-fn';
import IB from './primitives/inline-block';

class AddRemoveClassname extends React.Component {
  constructor() {
    super();
    this.state = {
      classActive: false,
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
  }

  addClass() {
    this.setState({ classActive: true });
  }

  removeClass() {
    this.setState({ classActive: false });
  }

  render() {
    const cn = this.state.classActive ? this.props.className : '';
    return (
      <div>
        <CallFn fn={this.addClass} />
        <CallFn fn={this.removeClass} />
        <IB className={cn}>{ this.props.children }</IB>
      </div>
    );
  }
}

AddRemoveClassname.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default AddRemoveClassname;
