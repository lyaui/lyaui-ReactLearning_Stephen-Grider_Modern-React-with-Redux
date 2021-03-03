import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    return <div className='header'>userId: {this.props.user?.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.userId) || {},
});

export default connect(mapStateToProps)(UserHeader);
