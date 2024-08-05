import "./style/app.css";
import List from "./components/list";
import { useState } from "react";
import dataSet from "./components/data";

function App() {
  const [data, setData] = useState(dataSet);
  return (
    <>
      <main>
        <section>
          <h4 className="appHeading">{data.length} people in list</h4>
          <List people = {data}/>
         <button onClick={() => setData([])}>Remove all</button>
        </section>
      </main>
    </>
  );
}

export default App;
