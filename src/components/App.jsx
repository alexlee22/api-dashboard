import React from 'react'
import Weather from './Weather'
import Moment from './Moment'
import News from './News'

import { IMAGES } from '../const'

const App = () => {
    return(
      <div id="main-container" style={{backgroundImage: `url(${IMAGES["SYDNEY_CLOWDY"]})`}}>
      <div id="lhs-container">
        <Weather />
        <Moment />
      </div>
      <div id="rhs-container">
        <News />
      </div>
  </div>
    )
}

export default App


