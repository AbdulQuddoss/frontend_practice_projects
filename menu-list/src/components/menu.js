import React from "react";
import Pic from "../style/pic.jpg";

const Menu = ({listOfMenues}) => {
  return (
    <div>
     {listOfMenues.map((menuList) => {
       const{id, title, category, price, img, desc} = menuList;
       return (
        <div className="table" key={id}>
        <div className="row">
          <div className="col-4">
            <img src={Pic} alt="Loading" />
          </div>
          <div className="col-8">
           <div className="row headOfMenu">
              <div className="col-8"> <h6>{title}</h6></div>
               <div className="col-4"><span>${price}</span></div>
           </div>
           <div className="hr"></div>
            <div className="row descriptionOfMenu">
              {desc}
            </div>
           </div>
          </div>
        </div>
       )
     })}
      </div>
  );
};

export default Menu;
