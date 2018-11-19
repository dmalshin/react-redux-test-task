import React from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../../store/reducers/eventsReducer'

const EventListComponent = ({ events }) => (
  <ul>
    {events.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
)

export const EventList = connect((state) => ({
  events: getEvents(state),
}))(EventListComponent)
