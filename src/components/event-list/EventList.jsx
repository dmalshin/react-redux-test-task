import React from 'react'
import { connect } from 'react-redux'
import { getEvents } from '../../store/reducers/eventsReducer'
import './styles/EventList.scss'
import { EventListHeader } from './EventListHeader'
import { EventListTable } from './EventListTable'

const EventListComponent = ({ events }) => (
  <section className="EventList">
    <EventListHeader />
    <EventListTable events={events} />
  </section>
)

export const EventList = connect((state) => ({
  events: getEvents(state),
}))(EventListComponent)
