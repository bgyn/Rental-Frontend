import Navbar from "../Components/Ui/Navbar";
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid, Grid2, TextField } from "@mui/material";


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Sell = () => {
  return (
    <>
      <Navbar />
      <section>
        <Grid2 container>
          <Grid2></Grid2>
        </Grid2>
      </section>
    </>
  );
};

export default Sell;
