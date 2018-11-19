import React from 'react'
import { Fragment } from 'redux-little-router'
import { EventList } from './event-list'

export const Routes = () => (
  <Fragment forRoute="/">
    {/* prettier-ignore */}
    <React.Fragment>
      <Fragment forRoute="/"><EventList /></Fragment>
    </React.Fragment>
  </Fragment>
)
