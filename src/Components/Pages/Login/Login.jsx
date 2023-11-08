import { Link, useNavigate } from 'react-router-dom';
import login2 from '../../../assets/login2.jpg'
import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";
import useAuthProvider from '../../../CustomHooks/useAuthProvider';
import { Helmet } from 'react-helmet';



const Login = () => {
  const {loginUser, googleLogin} = useAuthProvider()
  const navigate = useNavigate()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        Toast.fire({
          icon: 'success',
          title: 'User Google Sing In successfully'
        })
        navigate('/')
      })
      .catch(() => {
        Toast.fire({
          icon: 'error',
          title: 'User Google Sign In failed'
        })
      })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);

    // login user 
    loginUser(email, password)
      .then(result => {
        if (result.user) {
          Toast.fire({
            icon: 'success',
            title: 'User Login successfully'
          })
        }
        form.reset()
        navigate('/')
      })
      .catch(() => {
        Toast.fire({
          icon: 'error',
          title: 'Checked your email and password.'
        })
      })
    
  }

  return (
    <div>
      <Helmet>
      <title>Dream Job | Login</title>
      </Helmet>
      <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${login2})` }}>
        <div className="hero-overlay bg-opacity-80"></div>

       <div>
         <div className="bg-black bg-opacity-70 md:py-20 rounded-lg py-2">
          <div className="hero-content flex-col md:px-20 md:space-y-12">
            <div className="w-80 md:w-[550px] text-left">

              <div className="flex flex-col border-opacity-50">
                <div className=" h-10 w-1/2 mx-auto rounded-box place-items-center"> <button className='flex items-center justify-center gap-3' onClick={handleGoogleSignIn}>
                  <FcGoogle className='text-xl'></FcGoogle>
                  <h1 className="text-xl text-red-600 font-bold">Google Sign In</h1>
                </button></div>

                {/* <div className="divider text-white">OR</div> */}
                <div className="divider text-white border-b-2"></div> 
                <h1 className="text-xl md:text-3xl text-red-600 font-bold">Sign in now!</h1>
              </div>





            </div>
            <div className="w-full text-white">
              <form onSubmit={handleSignIn} className="">
                <div className="form-control ">
                  <label className="label">
                    <span className="text-white font-bold">Email</span>
                  </label>
                  <input type="email"
                    name="email"
                    placeholder="email" className=" text-black input input-bordered w-full" required />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="text-white font-bold">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="text-black input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-white ">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type='submit' className="btn bg-red-600 w-full">Sign In</button>
                </div>
                <div className='mb-5 text-right form-control mt-6'>
                  <p className='text-white '>New in this website?! Please first <Link to="/registration"><span className='text-red-600 font-bold underline'>Sing Up</span></Link> here.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>

  );
};

export default Login;



// const Login = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Login;