import React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../store/reducers/itemsReducer'

const ModuleNameComponent = ({ items }) => (
  <ul>
    {items.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
)

export const ModuleName = connect((state) => ({
  items: getItems(state),
}))(ModuleNameComponent)
