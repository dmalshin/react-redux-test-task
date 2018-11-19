import React, { Component } from 'react'
import { ReduxForm } from './ReduxForm'

export class ReduxFormContainer extends Component {
  // eslint-disable-next-line class-methods-use-this
  getInitialValues() {
    return {
      preference: 'spaces',
      newsletter: true,
    }
  }

  submit = (values) => {
    // eslint-disable-next-line no-alert
    window.alert(JSON.stringify(values, null, 4))
  }

  render() {
    return (
      <ReduxForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    )
  }
}
