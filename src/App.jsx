import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import TestPage from "./pages/testPage";
import ViewRoom from "./pages/viewRoom";
import RoomsPage from "./pages/RoomsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/view-room" element={<ViewRoom />} />
        <Route path="/view-room/:data" element={<RoomsPage />} />
      </Routes>
    </Router>
  );
}

// To-Do: Setup Routing Here

export default App;
