import './styles/App.scss'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { AppHeader } from './AppHeader'
import { Routes } from '../Routes'

export const App = () => (
  <div className="app">
    <AppHeader />
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </div>
)
