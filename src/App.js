import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader.js";
const Home = React.lazy(() => import("./pages/Home.js"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
