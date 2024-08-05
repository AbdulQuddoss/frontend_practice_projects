import "./style/style.css"
import Review from "./components/review";
function App() {
  return (
    <>
    <main>
      <section>
       <dev className="head">
       <h2>Our Reviews</h2>
        <hr />
       </dev>
       <Review />
      </section>
    </main>
    </>
  );
}

export default App;
