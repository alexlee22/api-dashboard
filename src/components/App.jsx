import React from 'react'
import { hot } from 'react-hot-loader'
import Moment from './Moment'

import { IMAGES } from '../const'



const App = () => {
  return(
    <div id="main-container" style={{backgroundImage: `url(${IMAGES["PAINTING_ONE"]})`}}>
      <div id="lhs-container">
        <Moment />
      </div>
      <div id="rhs-container">
      </div>
    </div>
  )
}

export default hot(module)(App)