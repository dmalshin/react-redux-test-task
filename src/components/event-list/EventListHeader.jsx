import React from 'react'
import './styles/EventListHeader.scss'

export const EventListHeader = () => (
  <header className="EventListHeader">
    <div className="actions">
      <button type="button">+</button>
      <button type="button">-</button>
    </div>
    <div className="filter">
      Поиск <input type="text" />
    </div>
  </header>
)
