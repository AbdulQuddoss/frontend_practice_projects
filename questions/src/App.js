import "./style/style.css";
import Questions from "./components/questions"
import Data from "./components/data"
import { useState } from "react";
function App() {
  const [question, setQuestion] = useState(Data);
  return (
  <main>
    <section>
      <h2>Questions and ansers about signin</h2>
     {question.map((q) => {
     return <Questions key={q.id} {...q}/>
     })}
    </section>
  </main>
  );
}

export default App;
