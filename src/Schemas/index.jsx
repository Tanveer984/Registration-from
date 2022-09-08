import * as Yup from "yup";

export const RegistrationSchema = Yup.object({
  Name: Yup.string().min(3).max(25).required("Please enter   Name"),
  DOB: Yup.string().min(2).max(10).required("Please enter   DOB"),
  Gender: Yup.string().min(4).required("Please Select   Gender"),
  Mobile: Yup.string().min(10).max(12).required("Please enter   Number"),
  GovtID: Yup.string().min(2).max(10).required("Please Select Govt.ID Type"),
  G_ID_Number: Yup.string()
    .min(10)
    .max(16)
    .required("Please enter   Govt.ID Number"),
  Title: Yup.string().min(2).max(3).required("Please Select Title"),
  Gurd_Name: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter   Gurdian Name"),
  Email: Yup.string().email().required("Please Enter Vaild Email"),
  Emergency_contact: Yup.string()
    .min(10)
    .max(12)
    .required("Please enter   Number"),
  Address: Yup.string().min(2).required("Please enter Address"),
  City: Yup.string().required("Please Select   City"),
  State: Yup.string().required("Please enter   State/Province"),
  Country: Yup.string().required("Please enter Country Name"),
  Pincode: Yup.string().min(6).required("Please enter  Pincode"),
  Occupation: Yup.string().min(4).required("Please enter   Ouucpation"),
  Religion: Yup.string().min(2).max(12).required("Please enter   Religion"),
  BloodGroup: Yup.string().min(2).required("Please select   BloodGroup"),
  Marital: Yup.string().min(5).max(12).required("Please enter Marital Status"),
  Nationality: Yup.string()
    .min(3)
    .max(12)
    .required("Please enter   Nationality")
});
