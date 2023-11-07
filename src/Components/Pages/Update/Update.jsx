import useAuthProvider from "../../../CustomHooks/useAuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";


const Update = () => {
  const loadedData = useLoaderData();
  const { user } = useAuthProvider();
  const navigate = useNavigate();

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

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const minimumPrice = form.minimumPrice.value;
    const maximumPrice = form.maximumPrice.value;

    form.reset();
    const updateJob = {
      email,
      jobTitle,
      deadline,
      description,
      minimumPrice,
      maximumPrice,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addjobs/${loadedData[0]._id}`, {
          method: "PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateJob)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            Toast.fire({
              icon: 'success',
              title: 'Updated successfully'
            })
          }
        })
        .catch(err => {
          console.log(err.message);
        })
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

   
  };
  return (
    <div className=" flex items-center justify-center max-w-7xl mx-auto min-h-screen">
      <div className="card-body bg-base-200 rounded-lg">
        <p className="text-3xl text-center border-b-4 border-secondary w-fit mx-auto uppercase mb-5">
          Update Job
        </p>
        <form onSubmit={handleUpdate}>
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
                defaultValue={loadedData[0].jobTitle}
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
                defaultValue={loadedData[0].deadline}
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
                defaultValue={loadedData[0].description}
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
                defaultValue={loadedData[0].minimumPrice}
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
                defaultValue={loadedData[0].maximumPrice}
                name="maximumPrice"
                placeholder="Maximum Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* <div className="form-control w-full">
                <label className="label">
                  <span className="font-bold">Job Category</span>
                </label>
                <select name="category" id="" className="input input-bordered"> 
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>
              </div> */}
          <div className=" text-center mt-6">
            <input
              type="submit"
              value="Update"
              className="btn btn-secondary input input-bordered"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
