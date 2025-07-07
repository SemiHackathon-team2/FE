import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage/Homepage";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

