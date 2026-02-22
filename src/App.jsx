import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import RootLayouts from "./components/layouts/RootLayouts";

function App() {
  return (
    <div className="font-lato">
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
