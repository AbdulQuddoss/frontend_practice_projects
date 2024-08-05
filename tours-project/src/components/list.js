import React, { useState } from "react";
import "../style/app.css";
//import Pic from "../style/pic.jpg";

const List = ({tours, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
    {tours.map((tour) => {
      const {id, name, info, image, price} = tour;
      return(
         <article className="listArticle" key={id}>
        <div className="row row1">
          <img src={image} alt="loading" />
        </div>
        <div className="row row2">
          <div className="head">
            <h4>{name}</h4>
            <span>${price}</span>
          </div>
          <p>
           {readMore ? info : `${info.substring(0, 200)}`}...
           <a onClick={() => setReadMore(!readMore)}>
             {readMore ? 'less more':'read more'}
           </a>
          </p>
          <button className="articalButton" onClick={() => removeTour(id)}>Not Interested</button>
        </div>
      </article>
      )
    })}
  </>
  )
};

export default List;
