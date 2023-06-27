import React from 'react'

const Product = ({ name, properties }) => {
  return (
    <div style={{ margin: ".5rem", padding: ".5rem", border: "1px solid black" }} key={name}>
      <p>{name}</p>
      <ul>{properties.map((prop) => <li key={prop}>{prop}</li>)}</ul>
    </div>
  )
}

export default Product