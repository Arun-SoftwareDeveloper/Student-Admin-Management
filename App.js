import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import StudentForm from "./Components/StudentDetails";
import AdminPage from "./Components/AdminPage";
import ViewStudents from "./Components/ViewStudents";

function App() {
  const [studentList, setStudentList] = useState([]);

  const handleInputChange = (firstName, lastName) => {
    const newStudent = { firstName, lastName };
    setStudentList((prevStudentList) => [...prevStudentList, newStudent]);
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/adminpage" element={<AdminPage />} />
          <Route
            path="/studentdetails"
            element={<StudentForm handleInputChange={handleInputChange} />}
          />
          <Route
            path="/viewstudents"
            element={<ViewStudents studentList={studentList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
