import React from 'react'
import './styles/EventListTable.scss'

export const EventListTable = ({ events }) => (
  <table className="EventListTable">
    <thead>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        <th>Название</th>
        <th>Дата</th>
        <th>Место проведения</th>
      </tr>
    </thead>
    <tbody>
      {events.map(({ id, name, date, city }) => (
        <tr key={id}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{name}</td>
          <td>{date}</td>
          <td>{city}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
