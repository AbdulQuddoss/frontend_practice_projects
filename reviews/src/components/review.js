import {React, useState} from "react";
import "../style/style.css";
import Pic from "../style/pic.jpg";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";
import People from "./data"

const Review = () => {
  //var index = 0;
  var [data, setData] = useState(0);
  const {id, name, job, image, text} = People[data];
  
const checkNumber = (number) => {
  if(number > People.length-1){
    return 0;
  }
  if(number < 0){
    return People.length-1;
  }
  return number;
}

const nextPerson = () => {
  setData((data) => {
    let newData = data + 1;
    return checkNumber(newData);
  })
}

const previousPerson = () => {
  setData((data) => {
    let newData = data - 1;
    return checkNumber(newData);
  })
}

const random = () => {
  let ran = Math.floor(Math.random() * People.length);
  if(ran === data){
    ran = data + 1;
    setData(checkNumber(ran))
  }else{
    setData(ran)
  }
}
  return (
    <div>
      <article>
        <div className="img">
          <div className="imgBehind">
            {" "}
            <img src={image} alt="loading" />
            <div className="quotes">
              <FaQuoteRight style={{ color: "white", marginTop: "3px" }} />
            </div>
          </div>
        </div>
        <section className="reviewSection">
          <h5 className="name">{name}</h5>
          <h5 className="job">{job}</h5>
          <p className="info">
           {text}
          </p>
          <div className="arrowBtn">
            <button className="btn forwardBtn" onClick={previousPerson}>
              <FaChevronCircleLeft />
            </button>
            <button className="btn backWordBtn" onClick={nextPerson}>
              <FaChevronCircleRight />
            </button>
          </div>
          <button className="btn randomBtn" onClick={random}>Random</button>
        </section>
      </article>
    </div>
  );
};

export default Review;
