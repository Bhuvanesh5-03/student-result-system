import React from 'react'
import {  useNavigate } from 'react-router-dom'
const Selection = () => {
    const navi=useNavigate()
    function handleNavi(name){
        if(name==="Student"){
            navi("StudentCheck")
       }
       else{
            navi("TeacherLogin")
       }
    }
  return (
    <div className='container-fluid p-4'>
        <div className='row align-items-start'>
            <div className="col text-center" >
                <div className='container-fluid img-container ' onClick={()=>handleNavi("Student")}>
                    <img src="https://img.freepik.com/premium-vector/back-school-concept-little-boy-with-backpack-cartoon-vector-illustration_849186-140.jpg?semt=ais_hybrid&w=740" alt="Student" ></img>
                </div>
                <h3>Student</h3>
            </div>
            <div className="col text-center">
                <div className='container-fluid img-container' onClick={()=>handleNavi("Teacher")}>
                    <img src="https://img.freepik.com/premium-vector/girl-holding-pencil-picture-girl-holding-book_1013341-447639.jpg?semt=ais_hybrid&w=740" alt="Teacher"></img>
                </div>
                <h3>Teacher</h3>
            </div>
        </div>
    </div>
  )
}

export default Selection