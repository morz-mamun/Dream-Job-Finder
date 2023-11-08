import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import useAuthProvider from "../../CustomHooks/useAuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
  const {logoutUser, user} = useAuthProvider()
  const navLinks = <>
    <li> <NavLink to={'/'}>Home</NavLink></li>
    <li> <NavLink to={'/addjobs'}>Add Job</NavLink></li>
    <li> <NavLink to={'/mypostedJobs'}>My Posted Jobs</NavLink></li>
    <li> <NavLink to={'/mybids'}>My Bids</NavLink></li>
    <li> <NavLink to={'/bidRequest'}>Bid Requests</NavLink></li>
    <li> <NavLink to={'/registration'}>Registration</NavLink></li>
   
  </>

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

  const handleLogoutUser = () => {
    logoutUser()
    .then(() => {
      Toast.fire({
        icon: 'success',
        title: 'User Logout successfully'
      })
    })
    .catch(() => {
      Toast.fire({
        icon: 'error',
        title: 'User logout Unsuccessful.'
      })
    })
  }
    return (
        <div className="navbar bg-base-200 md:px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
       {navLinks}
      </ul>
    </div>
    <div className="w-6 h-6 md:w-10 md:h-10">
        <img className="rounded-full" src={logo} alt="" />
      </div>
    <a className="btn btn-ghost normal-case md:text-xl">Dream Job</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="flex items-center gap-2">
         <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
        <p className="text-sm font-bold">{user.displayName}</p>
        </div>: ''
    }
    {
      user ? <button onClick={handleLogoutUser} className="btn btn-outline btn-sm btn-secondary ml-1">Logout</button> : 
      <Link to={'/login'}><button className="btn btn-outline text-black btn-secondary btn-sm ml-1">Login</button></Link>
    }
    
   
  </div>
</div>
    );
};

export default Navbar;