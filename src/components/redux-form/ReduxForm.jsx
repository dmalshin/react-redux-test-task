import './styles/reduxFrom.scss'
import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Input, Select } from '../common/fields'
import {
  required,
  minLength,
  maxLength,
  matchesPassword,
} from '../../lib/validation'
import { Discounts } from './Discounts'

export const Form = (props) => {
  const { handleSubmit } = props
  return (
    <div className="app__column app__column_single redux-form">
      <h2>Form Example</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          component={Input}
          type="text"
          label="First Name"
          validate={[required]}
        />
        <Field
          name="surname"
          component={Input}
          type="text"
          label="Surname"
          validate={[required]}
        />
        <Field
          name="username"
          component={Input}
          type="text"
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          component={Input}
          type="password"
          label="Password"
          validate={[required]}
        />
        <Field
          name="confirmPassword"
          component={Input}
          type="password"
          label="Confirm Password"
          validate={[required, matchesPassword]}
        />
        <Field
          name="preference"
          component={Select}
          label="Preferred Formatting"
        />
        <Field
          name="newsletter"
          component={Input}
          type="checkbox"
          label="Sign up to newsletter?"
        />
        <FieldArray name="discountCodes" component={Discounts} />
        <div className="form-item">
          <div className="form-label-empty" />
          <div className="form-control">
            <button type="submit" className="btn btn_text">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export const ReduxForm = reduxForm({
  form: 'register',
})(Form)
