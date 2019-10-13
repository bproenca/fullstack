import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      desc: '',
      targetDate: moment(new Date()).format("YYYY-MM-DD")
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  componentDidMount() {
    let userName = AuthenticationService.getLoggedInUser
    TodoDataService.retrieveTodo(userName, this.state.id)
    .then(response => {
      this.setState({
        desc: response.data.desc,
        targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
      })
    })
  }

  validate(values) {
    let errors = {}
    console.log('validate')
    if (!values.desc) {
      errors.desc = "Enter a description"
    } else if (values.desc.length < 5 ) {
      errors.desc = "Desc should have at least 5 chars"
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a targetValue"
    }
    return errors
  }

  onSubmit(values) {
    console.log('onSubmit')
    console.log(values)
  }

  render() {
    let {desc, targetDate} = this.state

    return (
      <div>
        <h1>TODO</h1>
        <div className="container">
          <Formik
            initialValues={{desc,targetDate}}
            onSubmit={this.onSubmit}
            validate={this.validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {
              
              (props) => (
                <Form>
                  <ErrorMessage name="desc" component="div" className="alert alert-warning"></ErrorMessage>
                  <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                  <fieldset className="form-group">
                    <label>Description</label>
                    <Field className="form-control" type="text" name="desc"></Field>
                  </fieldset>
                  <fieldset className="form-group">
                    <label>target Date</label>
                    <Field className="form-control" type="date" name="targetDate"></Field>
                  </fieldset>
                  <button type="submit" className="btn btn-success">Save</button>
                </Form>
              )
            }
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
