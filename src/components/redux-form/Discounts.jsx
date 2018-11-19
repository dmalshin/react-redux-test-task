import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../common/fields'

export const Discounts = ({ fields }) => (
  <div>
    {fields.map((code, index) => (
      <div key={index} className="fields-array__row">
        <Field
          name={code}
          type="text"
          component={Input}
          label={`Discount Code #${index + 1}`}
          autoFocus
        />
        <button
          type="button"
          onClick={() => fields.remove(index)}
          className="fields-array__remove"
        >
          &times;
        </button>
      </div>
    ))}
    <div className="form-item">
      <div className="form-label-empty" />
      <div className="form-control">
        <button type="button" onClick={() => fields.push()}>
          Add
          {!fields.length ? 'Discount Code(s)' : 'Another'}
        </button>
      </div>
    </div>
  </div>
)
