import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const data = "I am data declared in Parent Component being drilled " ;

  return (
    <>
    <div>ParentComponent</div>
    <ChildComponent data = {data} /> 
    </>
  )
}

export default ParentComponent