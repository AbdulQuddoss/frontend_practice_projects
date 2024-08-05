import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const Questions = ({title, info}) => {
    const [dis, setDis] = useState(false);

  return (
   <>
    <article>
      <div className="head">
      <h4>{title}</h4>
      <button>
          {!dis ? <FaPlus style={{color: "red"}} onClick={() => setDis(!dis)}/> : <FaMinus style={{color: "red"}} onClick={() => setDis(!dis)}/>}
      </button>
      </div>
      {dis && <p>{info}</p>}
    </article>
   </>
  );
};

export default Questions;
