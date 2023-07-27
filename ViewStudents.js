import React from "react";
import "../Style/ViewStudents.css";

function ViewStudents(props) {
  const { studentList } = props;

  return (
    <>
      <h1>View Students</h1>
      <div className="container">
        {studentList && studentList.length > 0 ? (
          studentList.map((student, index) => (
            <div key={index}>
              <span className="student-details">
                First Name: {student.firstName}
              </span>
              <span className="student-details">
                Last Name: {student.lastName}
              </span>
              <span className="student-details">Age: {student.age}</span>
              <span className="student-details">Roll No: {student.rollNo}</span>
              <span className="student-details">
                Class Section: {student.classSection}
              </span>
              <span className="student-details">
                Blood Group: {student.bloodGroup}
              </span>
              <span className="student-details">
                Father Name: {student.fatherName}
              </span>
              <span className="student-details">
                Mother Name: {student.motherName}
              </span>
            </div>
          ))
        ) : (
          <div>No students found.</div>
        )}
      </div>
    </>
  );
}

export default ViewStudents;
