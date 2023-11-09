import { useLoaderData, useNavigate } from "react-router-dom";
import useAuthProvider from "../../../CustomHooks/useAuthProvider";
import axios from "axios";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";


const JobDetails = () => {
    const loadedJob = useLoaderData()
    console.log(loadedJob);
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

    const handleBidOnProject = (e) => {
        e.preventDefault()
        const form = e.target
        const price = form.price.value
        const deadline = form.deadline.value
        const userEmail = form.userEmail.value
        const buyerEmail = form.buyerEmail.value
        const jobTitle = form.jobTitle.value

        const bidProject = {price, deadline, userEmail, buyerEmail, jobTitle}

        axios.post('  https://dream-job-finder-server.vercel.app/bidprojects', bidProject)
        .then(res => {
            if(res.data.acknowledged){
                Toast.fire({
                  icon: 'success',
                  title: 'New Project Added successfully'
                })
              }
              form.reset()
              navigate('/mybids')
        })
    }
    return (
    <div>
      <Helmet>
        <title>Dream Job | JobDetails</title>
      </Helmet>
        <div className="max-w-7xl mx-auto min-h-screen">
         <div className="flex justify-center mt-20">
        {
            loadedJob.map(job =>  <div key={job._id} className="card rounded-lg hover:bg-gray-600 hover:text-white rounded-t-md border-2 border-black border-s-fuchsia-300 h-full bg-pink-50 w-2/3">
            <div className="card-body">
               <h2 className="text-center font-bold border-b-4 border-secondary w-fit mx-auto ">
                 Job Details
               </h2>
               <h1 className=""><span className="font-bold">Job Title:</span> {job.jobTitle}</h1>
               <h1 className=""><span className="font-bold">Deadline:</span> {job.deadline}</h1>
               <h1 className="">
                 <span className="font-bold">Price Range: </span>{job.minimumPrice} - {job.maximumPrice}
               </h1>
               <h1 className="">
                <span className="font-bold"> Description:</span> <span className="">{job.description}</span>{" "}
               </h1>
             </div>
         </div>)
        }
       </div>
       <div className="mt-10">
       <div className="card-body bg-base-200 rounded-lg">
        <p className="text-3xl text-center border-b-4 w-fit mx-auto border-secondary mb-5"> Place Your Bid</p>
        <form onSubmit={handleBidOnProject}>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Your Bidding Amount."
                className="input input-bordered"
              />
            </div>

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
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user?.email}
                placeholder="Deadline"
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Buyer Email</span>
              </label>
              <input
                type="email"
                defaultValue={loadedJob[0]?.email}
                name="buyerEmail"
                placeholder="Buyer Email"
                className="input input-bordered"
                readOnly
              />
            </div>
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="font-bold">Job Title</span>
              </label>
              <input
                type="text"
                defaultValue={loadedJob[0].jobTitle}
                name="jobTitle"
                placeholder="Buyer Email"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className=" text-center mt-6">
                {
                    user?.email === loadedJob[0]?.email ?   <input type="submit" value="Bid on the project" disabled className="btn btn-secondary input input-bordered text-black" /> : 

                    <input type="submit" value="Bid on the project" className="btn btn-secondary input input-bordered text-black" />
                }
                 
           
        
        </div>
        </form>
      </div>
       </div>
      </div>
    </div>
    );
};



export default JobDetails;