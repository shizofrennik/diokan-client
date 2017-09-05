import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    
    this.close = this.close.bind(this)
  }
  
  close() {
    if(this.props.removeChildren) this.props.removeChildren();
    this.setState({show: false});
  }
  
  static propTypes = {
    notificationType: PropTypes.string,
    removeChildren: PropTypes.func
  }

  render() {
    let {notificationType} = this.props;
    if(!this.state.show) return null;
    
    return (
      <div className={classNames("diokan-notification", {[`diokan-notification__${notificationType}`]: notificationType} )}>
        <div className="diokan-notification__description">
          {this.props.children}
        </div>
        <div className="diokan-notification__action">
          <button className="diokan-btn diokan-btn-close" onClick={this.close}>
            <i className="fa fa-times" />
          </button>
        </div>
      </div>
    )
  }
}

export default Notification