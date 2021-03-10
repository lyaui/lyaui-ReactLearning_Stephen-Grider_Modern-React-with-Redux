import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    // return <input type='text' onChange={formProps.input.onChange} value={formProps.input.value} />;
    const className = `field ${meta.error && meta.touched ? `error` : null}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    // 一旦欄位被 focus 過 touched 就會是 true
    if (touched && error)
      return (
        <div className='ui error mrssage'>
          <div className='header'>{error}</div>
        </div>
      );
  };

  onSubmitForm = (formValues) => {
    // e.preventDefault() 不需要，因為 redux-form 已經預設了
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      // submit 這邊要使用 redux-form 的 handleSubmit 方法然後傳入自己的方法
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
        {/* 這裡的 component 屬性類似 slot 的功能 */}
        <Field name='title' component={this.renderInput} label='Enter Title'></Field>
        <Field name='description' component={this.renderInput} label='Enter Description'></Field>
        <button className='ui button primary' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
