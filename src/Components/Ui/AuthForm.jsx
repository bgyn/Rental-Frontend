import { Link, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";

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

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const formik = useFormik({
    initialValues: {
      email: "john@mail.com",
      password: "password",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      if(isLogin=='login'){
        alert(JSON.stringify(values,null,2));
      }
      else{
        console.log(JSON.stringify(values,null,2))
      }
    },
  });

  

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <div className="bg-slate-400 flex flex-col p-8 rounded-lg">
        <h3 className="text-2xl font-bold leading-tight tracking-tight">
          {isLogin ? "Login to your account" : "Sign up for new account"}
        </h3>
        <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6 mt-3">
          <div>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <button type="radio"></button>
              <p>Remember Me</p>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <div>
            <button type="submit" className="bg-blue-500 w-full rounded-lg py-2">
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? "Create a new account?" : "Already have an account?"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
