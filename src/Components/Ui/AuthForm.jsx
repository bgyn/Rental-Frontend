
import { Link, useSearchParams } from 'react-router-dom';

const AuthForm = () => {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode')=== 'login';

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <div className="bg-slate-400 flex flex-col p-8 rounded-lg">
        <h3 className="text-2xl font-bold leading-tight tracking-tight">{isLogin? 'Login to your account': 'Sign up for new account'}</h3>
        <form action="" className="space-y-4 md:space-y-6 mt-3">
          <div>
            <label htmlFor="email" className="block font-medium text-`gray-800 mb-2">Your email</label>
            <input type="text" className="w-full rounded-lg" />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-800 mb-2">Password</label>
            <input type="password" placeholder="••••••••" className="w-full rounded-lg" />
          </div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <button type="radio"></button>
              <p>Remember Me</p>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <div>
            <button className="bg-blue-500 w-full rounded-lg py-2" >
                {isLogin ? 'Sign In': 'Sign Up'}

            </button>
          </div>
        </form>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>{isLogin? 'Create a new account?':'Already have an account?'}</Link>
      </div>
    </div>

  )
}

export default AuthForm