import React from 'react'

export const Select = (props) => (
  <div className="form-item">
    <label>{props.label}</label>
    <div className="form-control">
      <select {...props.input}>
        {/*
          TODO: Кастомные опции и/или использование react-select
          https://gist.github.com/leocristofani/98312e61807db8f32e720c9f97a186e5
        */}
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  </div>
)
