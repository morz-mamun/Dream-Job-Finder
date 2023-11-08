import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/login.jpg'
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Swal from 'sweetalert2'
import useAuthProvider from '../../../CustomHooks/useAuthProvider';
import { Helmet } from 'react-helmet';

const Registration = () => {
  const { createUser, userProfileUpdate} = useAuthProvider()
  const [error, setError] = useState('')
  const [showPass, setShowPass] = useState(false)

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

  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);

    setError('')

    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/.test(password)) {
      setError(<>
        <div className="toast-bottom">
          <div className="alert bg-white">
            <span className='text-red-600 font-bold'>Password should have at least one [A-Z], [a-b], [0-9] and special character.</span>
          </div>
        </div>
      </>)
      return
    }

    // create user 
    createUser(email, password)
      .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'User Signed Up successfully'
          })
          userProfileUpdate(name, photo)
          .then(()=> {
            Toast.fire({
              icon: 'success',
              title: 'User profile update successfully'
            })
          })
          .catch(err => {
            console.log(err.message);
          })
      })
      .catch(() => {
        Toast.fire({
          icon: 'error',
          title: 'User Signed Up Unsuccessful.'
        })
      })
      form.reset()
    navigate('/login')
  }
  return (
    <div>
      <Helmet>
      <title>Dream Job | Registration</title>
      </Helmet>
      <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${login})` }}>
        <div className="hero-overlay bg-opacity-80"></div>

        <div className="bg-black bg-opacity-70 md:py-20 rounded-lg py-2 my-5">
          <div className="hero-content flex-col md:px-20 md:space-y-12">
            <div className="w-80 md:w-[550px] text-left">
             
              <h1 className="text-xl md:text-5xl text-red-600 font-bold">Registration now!</h1>
            </div>
            <div className="w-full text-white">
              <form onSubmit={handleSignUp}>
                <div className="form-control ">
                  <label className="label">
                    <span className="text-white font-bold">Name</span>
                  </label>
                  <input type="text"
                    name="name"
                    placeholder="Name" className="input input-bordered w-full text-black" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-bold">Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="photo URL" className="input input-bordered text-black" required />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="text-white font-bold">Email</span>
                  </label>
                  <input type="email"
                    name="email"
                    placeholder="Email" className="input input-bordered w-full text-black" required />
                </div>
                <div className="form-control mt-5 relative">
                  <label className="label">
                    <span className="text-white font-bold">Password</span>
                  </label>
                  <input type={showPass ? 'text' : 'password'}
                    name="password"
                    placeholder="Password" className="input input-bordered text-black" required />
                    <span className='absolute bottom-0 right-0 top-14 text-black text-xl' onClick={() => setShowPass(!showPass)}>
                      {
                        showPass ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                      }

                    </span>
                 
                </div>
                <div className="form-control mt-6">

                  <button type='submit' className="btn bg-red-600 w-full">Sign Up</button>

                  <div className='from-control my-3'>{error}</div>

                </div>
                <div className='mb-5 text-right form-control mt-6'>
                  <p className='text-white '>Already have an account please <Link to="/login"><span className='text-red-600 font-bold underline'>Log in</span></Link> here.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

// const Registration = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Registration;