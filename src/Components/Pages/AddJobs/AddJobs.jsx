import axios from "axios";
import useAuthProvider from "../../../CustomHooks/useAuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const AddJobs = () => {
  const {user} = useAuthProvider()
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

  const handleAddJob = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const jobTitle = form.jobTitle.value
    const deadline = form.deadline.value
    const description = form.description.value
    const minimumPrice = form.minimumPrice.value
    const maximumPrice = form.maximumPrice.value
    const category = form.category.value

    form.reset()
    const newJob = {email, jobTitle, deadline, description, minimumPrice, maximumPrice, category}

    fetch(' https://dream-job-finder-server.vercel.app/addjobs', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        Toast.fire({
          icon: 'success',
          title: 'Job added successfully'
        })
      }
      navigate('/mypostedJobs')
    })
    
    
  }
  return (
   <div>
    <Helmet>
      <title>Dream Job | AddJobs</title>
    </Helmet>
     <div className=" flex items-center justify-center max-w-7xl mx-auto min-h-screen">
      <div className="card-body bg-base-200 rounded-lg">
        <p className="text-3xl text-center border-b-4 border-secondary w-fit mx-auto uppercase mb-5">Add Job</p>
        <form onSubmit={handleAddJob}>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                placeholder="Email of the Employer."
                className="input input-bordered"
               readOnly
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Job Title</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                placeholder="Deadline"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Job Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
          <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Minimum Price</span>
              </label>
              <input
                type="text"
                name="minimumPrice"
                placeholder="Minimum Price"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Maximum Price</span>
              </label>
              <input
                type="text"
                name="maximumPrice"
                placeholder="Maximum Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Job Category</span>
              </label>
              <select name="category" id="" className="input input-bordered"> 
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
              </select>
            </div>
            <div className=" text-center mt-6">
          <input type="submit" value="Add Job"  className="btn btn-secondary input input-bordered" />
        </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default AddJobs;
