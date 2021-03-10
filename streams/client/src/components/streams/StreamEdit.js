import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  async componentDidMount() {
    await this.props.fetchStream(this.props.match.params.streamId);
  }
  onSubmitForm = (formValues) => {
    this.props.editStream(this.props.match.params.streamId, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            // initialValues 是 redux-form 內建的屬性，透過傳與 Field 元件 name 相對對應的物件來設定初始值
            initialValues={_.pick(this.props.stream, 'title', 'description')}
            onSubmit={this.onSubmitForm}
          ></StreamForm>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.streamId] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
