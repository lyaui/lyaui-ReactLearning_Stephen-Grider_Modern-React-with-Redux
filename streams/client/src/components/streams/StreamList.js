import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderList() {
    return this.props.streams.map((stream) => (
      <Link to={`/streams/${stream.id}`} className='item' key={stream.id}>
        {this.renderAdmin(stream)}
        <i className='large middle aligned icon camera' />
        <div className='content'>
          <div className='header'>{stream.title}</div>
          <div className='description'>{stream.description}</div>
        </div>
      </Link>
    ));
  }
  renderAdmin(stream) {
    if (stream.userId !== this.props.userId) return;
    return (
      <div className='right floated content'>
        <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
          Edit
        </Link>
        <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>
          Delete
        </Link>
      </div>
    );
  }
  renderCreate() {
    if (!this.props.isSignedIn) return;
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to='/streams/new' className='ui button primary'>
          Create Stream
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>StreamList</h2>
        <div className='ui celled list'> {this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values({ ...state.streams }),
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
