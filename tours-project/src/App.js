import "./style/app.css";
import List from "./components/list";
import { useState, useEffect } from "react";
import Reload from "./components/reload";
const Url = "https://course-api.com/react-tours-project";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(Url);
      const tours = await response.json();
      setData(tours);
      // console.log(tours);
    } catch (error) {
      console.log("error " + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
     const newTour = data.filter((tour) => tour.id !== id);
     setData(newTour);
  }

  if(data.length === 0){
    return(
     <main>
       <section>
       <h3 className="appHeading">Number of Places</h3>
          <hr />
       <Reload />
       </section>
     </main>
    )
  }
  return (
      <main>
        <section>
          <h3 className="appHeading">Number of Places</h3>
          <hr />
          <List tours = {data} removeTour = {removeTour}/>
          <button onClick={() => {setData([])}}>Remove all</button>
        </section>
      </main>
  );
}

export default App;
