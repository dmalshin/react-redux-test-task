import React from 'react'
import { Fragment } from 'redux-little-router'
import { ModuleName } from './module-name'

export const Routes = () => (
  <Fragment forRoute="/">
    {/* prettier-ignore */}
    <React.Fragment>
      <Fragment forRoute="/"><ModuleName /></Fragment>
    </React.Fragment>
  </Fragment>
)
