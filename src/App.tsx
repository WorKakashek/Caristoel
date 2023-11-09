import CanvasMain from "./components/Canvas/Canvas";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div style={{ height: "830px" }} className="">
        <CanvasMain />
      </div>
    </div>
  );
}

export default App;
