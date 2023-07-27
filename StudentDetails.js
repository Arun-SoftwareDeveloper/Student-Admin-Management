import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import "../Style/StudentDetails.css";

function StudentForm(props) {
  const { handleInputChange } = props;

  const alertmessage = () => {
    alert("Registered Successfully!!!");
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    grade: "",
    rollNo: "",
    classSection: "",
    bloodGroup: "",
    fatherName: "",
    motherName: "",
  };

  const onSubmit = (values) => {
    handleInputChange(values.firstName, values.lastName);
    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.age) {
      errors.age = "Age is required";
    } else if (values.age < 0 || values.age > 120) {
      errors.age = "Age must be between 0 and 120";
    }

    if (!values.grade) {
      errors.grade = " Grade is required";
    }

    if (!values.rollNo) {
      errors.rollNo = "Roll No is required";
    }

    if (!values.classSection) {
      errors.lastName = "Class Section is required";
    }

    if (!values.bloodGroup) {
      errors.bloodGroup = "Blood Group is required";
    }

    if (!values.fatherName) {
      errors.fatherName = "Father's Name is required";
    }

    if (!values.motherName) {
      errors.motherName = "Mother's Name is required";
    }

    if (!values.city) {
      errors.city = "City is required";
    }
    // Add validation logic for other fields

    return errors;
  };

  return (
    <div className="container">
      <h1 className="title">Student Details Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateForm}
      >
        <Form className="form">
          <div className="grid-container">
            <div className="form-group">
              <label htmlFor="firstName" className="label">
                First Name:
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="input"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="label">
                Last Name:
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="input"
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="age" className="label">
                Age:
              </label>
              <Field type="number" id="age" name="age" className="input" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="grade" className="label">
                Grade:
              </label>
              <Field type="text" id="grade" name="grade" className="input" />
              <ErrorMessage name="grade" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="rollNo" className="label">
                Roll No:
              </label>
              <Field type="text" id="rollNo" name="rollNo" className="input" />
              <ErrorMessage name="rollNo" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="classSection" className="label">
                Class Section:
              </label>
              <Field
                type="text"
                id="classSection"
                name="classSection"
                className="input"
              />
              <ErrorMessage
                name="classSection"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup" className="label">
                Blood Group:
              </label>
              <Field
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                className="input"
              />
              <ErrorMessage
                name="bloodGroup"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fatherName" className="label">
                Father's Name:
              </label>
              <Field
                type="text"
                id="fatherName"
                name="fatherName"
                className="input"
              />
              <ErrorMessage
                name="fatherName"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="motherName" className="label">
                Mother's Name:
              </label>
              <Field
                type="text"
                id="motherName"
                name="motherName"
                className="input"
              />
              <ErrorMessage
                name="motherName"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city" className="label">
                City:
              </label>
              <Field type="text" id="city" name="city" className="input" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>
          </div>
          <button type="submit" className="submit-btn" onClick={alertmessage}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default StudentForm;
