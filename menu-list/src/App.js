import "./style/style.css";
import { useState } from "react";
import Catagories from "./components/catagories";
import Menues from "./components/menu";
import Data from "./components/data";

var allCategory = ['all', ...new Set(Data.map((item) => item.category))];
console.log(allCategory);
function App() {
  const [menu, setMenu] = useState(Data);
  const [category, setCategory] = useState([]);
  
const filterCategory = (categ) => {
  if(categ === 'all'){
    setMenu(Data);
  }else{
  var newItem = Data.filter((item) => item.category === categ);
  setMenu(newItem);
  }

}

  return (
   <>
    <main>
      <section>
        <h2>Our menu</h2>
        <hr className="secHr" />
        <Catagories categorySelector = {filterCategory} categoryName = {allCategory}/>
        <Menues listOfMenues = {menu}/>
      </section>
    </main>
   </>
  );
}

export default App;
