"use client";

import React from 'react'
import { toggleTodo } from './action'

const ItemCheckbox = ({id, complete}: TodoModel) => {
  return (
    <input type="checkbox" id={id} className="peer" defaultChecked={complete}
        onChange={async (e) => toggleTodo(id, e.target.checked)}/>
  )
}

export default ItemCheckbox