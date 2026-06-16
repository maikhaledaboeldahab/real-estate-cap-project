import { Routes, Route } from "react-router-dom";

import Home from "../pages/HomePage";
import Properties from "../pages/PropertiesList";
import PropertyDetails from "../pages/PropertyDetails";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;