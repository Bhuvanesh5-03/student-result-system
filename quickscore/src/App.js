import React, { useState, useEffect } from "react";
import Header from "./Header";
import Markenter from "./Markenter";
import StudentCheck from "./StudentCheck";
import TeacherLogin from "./TeacherLogin";
import Selection from "./Selection";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("students");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      const defaultData = [
        {
          name: "Bhuvanesh",
          roll: "23ucs03",
          dob: "2006-03-16",
          tamil: 90,
          english: 80,
          maths: 99,
          physics: 89,
          chemistry: 90,
          computer: 98,
          total: 546
        },
        {
          name: "Giri",
          roll: "23ucs05",
          dob: "2005-06-24",
          tamil: 90,
          english: 80,
          maths: 99,
          physics: 89,
          chemistry: 90,
          computer: 98,
          total: 546
        }
      ];
      setData(defaultData);
      localStorage.setItem("students", JSON.stringify(defaultData));
    }
  }, []);

  // Update localStorage when data changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Selection />} />
          <Route path="StudentCheck" element={<StudentCheck data={data} />} />
          <Route path="Markenter" element={<Markenter setData={setData} />} />
          <Route path="TeacherLogin" element={<TeacherLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
