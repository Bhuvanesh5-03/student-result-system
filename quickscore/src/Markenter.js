import React from 'react';

const Markenter = ({ setData }) => {
  const [marks, setMarks] = React.useState({
    tamil: 0,
    english: 0,
    maths: 0,
    physics: 0,
    chemistry: 0,
    computer: 0
  });

  const handleChange = (subject, value) => {
    setMarks((prev) => ({
      ...prev,
      [subject]: Number(value) || 0
    }));
  };

  const totalMarks =
    marks.tamil +
    marks.english +
    marks.maths +
    marks.physics +
    marks.chemistry +
    marks.computer;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name: e.target.Name.value,
      roll: e.target.rollnumber.value,
      dob: e.target.DOB.value,
      tamil: marks.tamil,
      english: marks.english,
      maths: marks.maths,
      physics: marks.physics,
      chemistry: marks.chemistry,
      computer: marks.computer,
      total: totalMarks
    };
    fetch('http://localhost:8000/MarkCheck',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({roll:e.target.rollnumber.value})
    }).then(res=>res.text()).then(d=>{if(d==="true"){
    fetch('http://localhost:8000/MarkEnter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({newStudent})
        }).then(res=>res.text()).then(d=>{
          if(d==="true"){
            alert("Mark added successfully!");
          }
          else{
            alert("Error occured");
          }
        })}
        else{
          alert("Roll Number already exists");
        }
      })
    e.target.reset();
    setMarks({
      tamil: 0,
      english: 0,
      maths: 0,
      physics: 0,
      chemistry: 0,
      computer: 0
    });
  };

  return (
    <div className='container-fluid align-items-center'>
      <h4 className='display-5 text-center'>Mark Entry</h4>
      <div className='container pt-4 w-50'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" id="Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="rollnumber" className="form-label">Roll Number</label>
            <input type="text" className="form-control" id="rollnumber" required />
          </div>
          <div className="mb-3">
            <label htmlFor="DOB" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="DOB" required />
          </div>

          <div className="mb-3">
            <label htmlFor="tamil" className="form-label">Tamil</label>
            <input type="number" className="form-control" id="tamil" onChange={(e) => handleChange("tamil", e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="english" className="form-label">English</label>
            <input type="number" className="form-control" id="english" onChange={(e) => handleChange("english", e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="maths" className="form-label">Maths</label>
            <input type="number" className="form-control" id="maths" onChange={(e) => handleChange("maths", e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="physics" className="form-label">Physics</label>
            <input type="number" className="form-control" id="physics" onChange={(e) => handleChange("physics", e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="chemistry" className="form-label">Chemistry</label>
            <input type="number" className="form-control" id="chemistry" onChange={(e) => handleChange("chemistry", e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="computer" className="form-label">Computer Science</label>
            <input type="number" className="form-control" id="computer" onChange={(e) => handleChange("computer", e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Total</label>
            <p><strong>{totalMarks}</strong></p>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Markenter;
