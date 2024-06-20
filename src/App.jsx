import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home";
import ErrorPage from "./portFolio2/error-page";
import Root from "./portFolio2/root";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
