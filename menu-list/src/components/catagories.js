import React from 'react'
import "../style/style.css"

const catagories = ({categorySelector, categoryName}) => {
  
  return (
    <div>
      <div className="catagory">
        {categoryName.map((category, index) => {
          return (
            <button className='btn' key={index} onClick={() => categorySelector(category)}>{category}</button>
          )
        })}
          {/* <button className="btn all" onClick={() => categorySelector('all')}>All</button>
          <button className="btn brackFast"  onClick={() => categorySelector('breakfast')}>brackfast</button>
          <button className="btn lunch"  onClick={() => categorySelector('lunch')}>lunch</button>
          <button className="btn dinner"  onClick={() => categorySelector('shakes')}>dinner</button> */}
      </div>
    </div>
  )
}

export default catagories
