import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId);
  }
  // 將 jsx 作為 props 傳下去也是可以的！！！！！！
  actions = () => {
    const { streamId } = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(streamId)} className='ui button negative'>
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.actions()}
        onDismiss={() => history.push('/')}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.streamId],
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
