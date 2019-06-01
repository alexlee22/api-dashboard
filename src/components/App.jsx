import React from 'react'
import { hot } from 'react-hot-loader'
import Moment from './Moment'
import News from './News'
import { IMAGES } from '../const'



const App = () => {
    return(
      <div id="main-container" style={{backgroundImage: `url(${IMAGES["PAINTING_ONE"]})`}}>
      <div id="lhs-container">
        <Moment />
      </div>
      <div id="rhs-container">
        <News />
      </div>
  </div>
    )
}


export default hot(module)(App)




/*
render() {
    const { theDate } = this.state
    const { windowStatus } = this.props

    return (
      <div className={styles.ontainer}>

        <div className={styles.timeContainer}>
          {theDate &&
            format_time(theDate)
          }
        </div>
        {theDate &&
          <div className={styles.extContainer}>
              <div className={styles.ampmContainer} style={ is_am(theDate) ? {} : {'opacity': '0.1'}}>
                AM
              </div>
              <div className={styles.ampmContainer} style={ is_am(theDate) ? {'opacity': '0.1'} : {}}>
                PM
              </div>
          </div>
        }
        { theDate &&
          <div className={styles.dayDateContainer}>
            {formatDateFull(theDate)}
          </div>
        }
      </div>
    )

  }

*/