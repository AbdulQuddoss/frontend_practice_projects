import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const Reload = () => {
  return (
    <div>
      <h5
       onClick={() => window.location.reload()}
       style = {{color: "blue", cursor: "pointer", margin: "1rem auto", width: "4rem"}}
        >
          <FontAwesomeIcon
           icon = {faArrowsRotate}
           />
           
           Reload
           </h5>
    </div>
  )
}

export default Reload;
