import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import PageNotFound from "../views/PageNotFound";
const AllRoutes=()=>(
  <Router>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/login" element={<LoginView/>} />
      <Route path="/home" element={<HomeView/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
)
export default AllRoutes;