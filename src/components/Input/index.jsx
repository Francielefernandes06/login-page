import React from 'react'

function input({children}) {
  return (
    <label htmlFor="{children}"></label>
    <input>{children}</input>
  )
}

export default input