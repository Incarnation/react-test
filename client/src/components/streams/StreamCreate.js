import React from "react";
import { Field, reduxForm } from "redux-form";

//create stream component
class StreamCreate extends React.Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput(formProps) {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>

      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
    );
  }

  //display error message on form validation
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  onSubmit(formValues) {
    //event.preventDefault();
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//validate input
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "please enter a title";
  }

  if (!formValues.description) {
    errors.description = "please enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "createForm",
  validate: validate
})(StreamCreate);
