import React from 'react'
import { MainRoute } from './router/MainRoute'
import {RouterProvider} from "react-router-dom"

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRoute}/>
    </div>
  )
}

export default App;