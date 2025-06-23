import React from 'react';

const StudentCheck = (props) => {
  const [found, setFound] = React.useState(false);
  const [studentData, setStudentData] = React.useState({
    name: "", roll: "", dob: "", tamil: 0, english: 0, maths: 0, physics: 0, chemistry: 0, computer: 0, total: 0
  });

  function markCheck(e) {
    e.preventDefault();
    const roll = e.target.Rollno.value;
    const dob = e.target.DOB.value;
    fetch("http://localhost:8000/Result",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({roll:roll,dob:dob})
    }).then(res=>res.json()).then(d=>{
      if(d){
        setStudentData(d);
        setFound(true);
      }
      else{
        alert("Invalid Input");
        setFound(false);
      }
    })

  }

  return (
    <div className='container-fluid align-items-center'>
      <h4 className='display-5 text-center'>Result</h4>
      <div className='container pt-4 w-50'>
        <form onSubmit={markCheck}>
          <div className="mb-3">
            <label htmlFor="Rollno" className="form-label">Roll Number</label>
            <input type="text" className="form-control" id="Rollno" />
          </div>
          <div className="mb-3">
            <label htmlFor="DOB" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="DOB" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br></br>
        {found && (
          <table className="table table-bordered text-center w-100 mx-auto">
  <thead className="table-light">
    <tr>
      <th colSpan={2} className="text-center">Result Table</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Name:</strong></td>
      <td className="border-start">{studentData.name}</td>
    </tr>
    <tr>
      <td><strong>Roll No:</strong></td>
      <td className="border-start">{studentData.roll}</td>
    </tr>
    <tr>
      <td><strong>DOB:</strong></td>
      <td className="border-start">{studentData.dob}</td>
    </tr>
    <tr>
      <td><strong>Tamil:</strong></td>
      <td className="border-start">{studentData.tamil}</td>
    </tr>
    <tr>
      <td><strong>English:</strong></td>
      <td className="border-start">{studentData.english}</td>
    </tr>
    <tr>
      <td><strong>Maths:</strong></td>
      <td className="border-start">{studentData.maths}</td>
    </tr>
    <tr>
      <td><strong>Physics:</strong></td>
      <td className="border-start">{studentData.physics}</td>
    </tr>
    <tr>
      <td><strong>Chemistry:</strong></td>
      <td className="border-start">{studentData.chemistry}</td>
    </tr>
    <tr>
      <td><strong>Computer:</strong></td>
      <td className="border-start">{studentData.computer}</td>
    </tr>
    <tr>
      <td><strong>Total:</strong></td>
      <td className="border-start">{studentData.total}</td>
    </tr>
  </tbody>
</table>

        )}
      </div>
    </div>
  );
};

export default StudentCheck;
