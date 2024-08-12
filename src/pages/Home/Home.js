import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/Navigation/NavigationBar";
import EmployeeForm from "../EmployeeFrom/EmployeeFrom";
import EmployeeListPage from "../EmployeeListPage/EmployeeListPage";

const Home = () => (
  <div>
    <NavigationBar />
    <br/>
    <EmployeeListPage/>
    <br/>
    <Footer />
  </div>
);

export default Home;
