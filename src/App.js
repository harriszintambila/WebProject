import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealsGrid from "./Components/rooms/meals";
import ImageGrid from "./Components/rooms/rooms";
import Root from "./routes/root";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageGrid />}>
          <Route path="" element={<MealsGrid />} />
          <Route index element={<ImageGrid />} />
          {/* <Route index element={<ErrorPage />} /> */}
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

