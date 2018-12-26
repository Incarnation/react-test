import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>

      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
    );
  }

  onSubmit(formValues) {
    //event.preventDefault();
  }

  render() {
    return (
      <form
        className="ui form"
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

export default reduxForm({
  form: "createForm"
})(StreamCreate);
