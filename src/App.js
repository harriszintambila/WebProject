import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealsGrid from "./Components/rooms/room";
import ImageGrid from "./Components/rooms/meals";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ImageGrid />}>
          <Route path=""  element={<MealsGrid />} />
          <Route path=""  element={<ImageGrid />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

