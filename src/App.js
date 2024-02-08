import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RangeList from "./components/RangeList/RangeList";
import ThrowTrash from "./components/ThrowTrash/ThrowTrash";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <RangeList />
        <ThrowTrash />
      </DndProvider>
    </div>
  );
}

export default App;
