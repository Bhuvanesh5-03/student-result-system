import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherLogin = () => {
  const navi = useNavigate();

  const teacherLogins = [
    { email: "Bhuvanesh05@gmail.com", password: "Bhuvanesh.05" },
    { email: "example01@gmail.com", password: "pass1234" },
    { email: "admin@school.com", password: "admin123" },
  ];

  function loginCheck(e) {
    e.preventDefault();

    const email = e.target.emailid.value;
    const password = e.target.tpassword.value;

    const isValidUser = teacherLogins.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidUser) {
      navi("/Markenter");
    } else {
      alert("Invalid Email or Password");
      window.location.reload()
    }
  }

  return (
    <div className='container-fluid align-items-center'>
      <h4 className='display-5 text-center'>Teacher Login</h4>
      <div className='container pt-4 w-50'>
        <form onSubmit={loginCheck}>
          <div className="mb-3">
            <label htmlFor="emailid" className="form-label">Email address</label>
            <input type="email" name="emailid" className="form-control" id="emailid" />
          </div>
          <div className="mb-3">
            <label htmlFor="tpassword" className="form-label">Password</label>
            <input type="password" name="tpassword" className="form-control" id="tpassword" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
