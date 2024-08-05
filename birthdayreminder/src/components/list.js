import React from 'react'
import "../style/app.css";

const list = ({people}) => {
    
  return (
    <div>
      {people.map((person) => {
          const {id, name, age, image} = person;
          return (
            <article key={id} className = 'listArtical'>
            <img src={image} alt={name} />
            <div>
                <h5>{name}</h5>
                <p>{age} years</p>
            </div>
         </article>
          )

      })}
    </div>
  )
}

export default list
