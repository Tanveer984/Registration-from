import { useFormik } from "formik";
import { RegistrationSchema } from "../Schemas";
import Table from "./Table";
// import { useEffect, useState } from "react";

const initialValues = {
  Name: "",
  DOB: "",
  Gender: "",
  Mobile: "",
  GovtID: "",
  G_ID_Number: "",
  Title: "",
  Gurd_Name: "",
  Email: "",
  Emergency_contact: "",
  Address: "",
  State: "",
  City: "",
  Country: "",
  Pincode: "",
  Occupation: "",
  Religion: "",
  BloodGroup: "",
  Marital: "",
  Nationality: ""
};

const Registration = () => {
  let data = JSON.parse(localStorage.getItem("Data") || "[]");
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleClick
  } = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,

    onClick: (action) => {
      action.resetFrom();
    },
    onSubmit: (values, action) => {
      data.push(values);
      localStorage.setItem("Data", JSON.stringify(data));
      // console.log(

      //   values
      // );
      action.resetForm();
    }
  });
  // console.log(
  //   errors
  // );

  return (
    <>
      <div>
        <div className="text-center p-3">
          {/* for Personal Info  */}
          <h1 className="">Registration Form</h1>
          <h4>Kindly fill in the Information Below:</h4>
        </div>
        <form onSubmit={handleSubmit} onClick={handleClick}>
          <div>
            <h3 className="p-1 text-white bg-dark">personal Information</h3>
            <div className="container">
              <div className="row gx-5">
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="Name"
                    className="form-control"
                    id="floatingInput Name"
                    name="Name"
                    value={values.Name}
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Full Name*</label>
                  {errors.Name && touched.Name ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Name}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="DOB"
                    className="form-control"
                    id="floatingInput DOB"
                    name="DOB"
                    value={values.DOB}
                    placeholder="DD/MM/YYYY"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">DOB(DD/MM/YYYY) OR AGE*</label>
                  {errors.DOB && touched.DOB ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.DOB}
                    </p>
                  ) : null}
                </div>
                <div className="col p-2 ">
                  <select
                    className="form-select"
                    type="Gender"
                    name="Gender"
                    id="sex"
                    onChange={handleChange}
                    value={values.Gender}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="TransGender">TransGender</option>
                  </select>
                  {errors.Gender && touched.Gender ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Gender}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="row gx-5">
                <div className="col-4 form-floating mb-3 p-2">
                  <input
                    type="Mobile"
                    className="form-control"
                    id="floatingInput"
                    name="Mobile"
                    value={values.Mobile}
                    placeholder="Mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Mobile*</label>
                  {errors.Mobile && touched.Mobile ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Mobile}
                    </p>
                  ) : null}
                </div>
                <div className="col-3 p-2 ">
                  <select
                    className="form-select"
                    type="GovtID"
                    name="GovtID"
                    id="GovtID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""> Select Govt Issued ID Type*</option>
                    <option value="Aadhar">Aadhar</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Pancard">PanCard</option>
                    <option value="PassPort">PassPort</option>
                  </select>
                  {errors.GovtID && touched.GovtID ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.GovtID}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="G_ID_Number"
                    className="form-control"
                    id="floatingInput"
                    name="G_ID_Number"
                    value={values.G_ID_Number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Govt.ID Number"
                  />
                  <label htmlFor="floatingInput">Govt ID Number *</label>
                  {errors.G_ID_Number && touched.G_ID_Number ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.G_ID_Number}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* personal Info end */}
          <div>
            {/*  for Contact */}
            <h3 className="bg-dark text-white p-1">Contact</h3>
            <div className="container">
              <div className="row gx-5">
                <div className="col-3 p-2 ">
                  <select
                    className="form-select"
                    type="Title"
                    name="Title"
                    id="title"
                    onChange={handleChange}
                    value={values.Title}
                    onBlur={handleBlur}
                  >
                    <option value=""> select Label*</option>
                    <option value="Mr">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                  {errors.Title && touched.Title ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Title}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="Gurd_Name"
                    value={values.Gurd_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Gurdian Name"
                  />
                  <label htmlFor="floatingInput">Gurdian Name*</label>
                  {errors.Gurd_Name && touched.Gurd_Name ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Gurd_Name}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="Email"
                    value={values.Email}
                    onBlur={handleBlur}
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Email*</label>
                  {errors.Email && touched.Email ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Email}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput Emergency_contact"
                    name="Emergency_contact"
                    value={values.Emergency_contact}
                    placeholder="Emergency Contact"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Emergency Contact*</label>
                  {errors.Emergency_contact && touched.Emergency_contact ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Emergency_contact}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Contact End */}
          <div>
            <h3 className="p-1 text-white bg-dark">Address</h3>

            {/* Address Start */}

            <div className="container">
              <div className="row gx-5">
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="Address"
                    value={values.Address}
                    placeholder="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Address*</label>
                  {errors.Address && touched.Address ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Address}
                    </p>
                  ) : null}
                </div>
                <div className="col p-2 ">
                  <select
                    className="form-select"
                    name="City"
                    id="city"
                    value={values.City}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""> select City*</option>
                    <option value="New Delhi">Delhi</option>
                    <option value="Central Delhi">Central Delhi</option>
                    <option value="South Delhi">South Delhi</option>
                    <option value="North Delhi">North Delhi</option>
                  </select>
                  {errors.City && touched.City ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.City}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="State"
                    className="form-control"
                    id="floatingInput"
                    name="State"
                    value={values.State}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="State"
                  />
                  <label htmlFor="floatingInput">State*</label>
                  {errors.State && touched.State ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.State}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="row gx-5">
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="Country"
                    value={values.Country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Country"
                  />
                  <label htmlFor="floatingInput">Country*</label>
                  {errors.Country && touched.Country ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Country}
                    </p>
                  ) : null}
                </div>

                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput Pincode"
                    name="Pincode"
                    value={values.Pincode}
                    placeholder="Pincode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Pincode*</label>
                  {errors.Pincode && touched.Pincode ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Pincode}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Address end */}
          <div>
            {/* Ohter Info */}

            <h3 className="p-1 text-white bg-dark">Other Information</h3>
            <div className="container">
              <div className="row gx-5">
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput Occupation"
                    name="Occupation"
                    value={values.Occupation}
                    placeholder="Occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Occupation*</label>
                  {errors.Occupation && touched.Occupation ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Occupation}
                    </p>
                  ) : null}
                </div>
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput Religion"
                    name="Religion"
                    value={values.Religion}
                    placeholder="Religion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Religion*</label>
                  {errors.Religion && touched.Religion ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Religion}
                    </p>
                  ) : null}
                </div>
                <div className="col p-2 ">
                  <select
                    className="form-select"
                    name="BloodGroup"
                    value={values.BloodGroup}
                    id="BloodGroup BloodGroup"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="O_">O-</option>
                    <option value="O+">O+</option>
                  </select>
                  {errors.BloodGroup && touched.BloodGroup ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.BloodGroup}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="row gx-5">
                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput Marital"
                    name="Marital"
                    value={values.Marital}
                    placeholder="marital status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Marital Status *</label>
                  {errors.Marital && touched.Marital ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Marital}
                    </p>
                  ) : null}
                </div>

                <div className="col form-floating mb-3 p-2">
                  <input
                    type="text Nationality"
                    className="form-control"
                    id="floatingInput Nationality"
                    name="Nationality"
                    value={values.Nationality}
                    placeholder="Nationality"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="floatingInput">Nationality *</label>
                  {errors.Nationality && touched.Nationality ? (
                    <p className="form-error text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger text-danger">
                      {errors.Nationality}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* Other Info end */}
          <div className="d-flex justify-content-end">
            <button type="btn" className="btn bg m-3">
              CANCEL X
            </button>
            <button
              className="btn bg-success m-3 me-5 text-white"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <h1 className="text-center"> Form Data</h1>
      <Table />
      Note: Represent only a few collected data points in the table to show the
      form functionality.
    </>
  );
};
export default Registration;
