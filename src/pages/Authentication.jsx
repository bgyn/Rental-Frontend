import AuthForm from "../Components/Ui/AuthForm";
import Navbar from "../Components/Ui/Navbar";

const Authentication = () => {
  return (
    <>
      <Navbar />
      <AuthForm />
    </>
  );
};

export default Authentication;

// export async function action({request}) {
//   const searchParams = new URL(request.URL).searchParams;
//   const mode = searchParams.get("mode") || 'login';
//   const data = await request.formData();
//   const authData ={
//     email: data.get('email'),
//     password: data.get('password')
//   }
// }
