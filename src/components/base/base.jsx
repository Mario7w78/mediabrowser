import VerticalBar from "../VerticalBar/VerticalBar"
import Bar from "../bar/bar"
import { Route, Routes, useLocation } from "react-router-dom"
import Table from "../table/Table"
import CreateDir from "../forms/CreateDir"
import CreatePage from "../forms/CreatePage"

function Base() {
  const location = useLocation();
  const state = location.state;
  const background = state && state.backgroundLocation;

  return (
    <div className="relative bg-gray-900 w-screen h-screen grid grid-cols-10 grid-rows-10">
      <Bar />
      <VerticalBar />
      <Routes location={background || location}>

        <Route path="media/:id" element={<Table />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="media/newDirectory" element={<CreateDir />} />
          <Route path="media/newPage/:id" element={<CreatePage />} />
        </Routes>
      )}
    </div>
  );
}

export default Base