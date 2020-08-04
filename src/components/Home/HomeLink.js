import React from 'react'
import { withRouter } from 'react-router-dom'

function HomeLink(props) {
  return (
    <div>
      {props.rutas.map((ruta, i) => (
        <button key={i} onClick={() => props.history.push(ruta.to)}>
          {ruta.name}
        </button>
      ))}
    </div>
  )
}

export default withRouter(HomeLink)
