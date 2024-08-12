import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmployeeView from "./pages/EmployeeView/EmployeeView";
import EmployeeFrom from "./pages/EmployeeFrom/EmployeeFrom";
import Home from "./pages/Home/Home";
import NavigationBar from "./Shared/Navigation/NavigationBar";
import Footer from "./Shared/Footer/Footer";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        {/* <EmployeeListPage></EmployeeListPage> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/view" element={<EmployeeListPage />} />
          <Route path="/form" element={<EmployeeFrom />} />
        </Routes>
        <br/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
