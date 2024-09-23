
import AuthForm from "../Components/Ui/AuthForm";


const Authentication = () => {
  return (
    <AuthForm/>
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