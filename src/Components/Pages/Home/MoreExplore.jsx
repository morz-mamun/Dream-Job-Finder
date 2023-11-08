import explore1 from "../../../assets/explore1.jpg";
import explore2 from "../../../assets/explore2.jpg";
import explore3 from "../../../assets/explore3.jpg";

const MoreExplore = () => {
  return (
   <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-center uppercase border-b-4 border-secondary w-fit mx-auto">More To Explore</h1>
     <div className="mt-10 mb-64 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-52 md:gap-10 lg:gap-5">
        
        <div className="relative">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={explore1} alt="Shoes" />
            </figure>
          </div>
          <div className=" md:w-80 bg-base-100  p-8 shadow-xl absolute -bottom-44 space-y-5">
            <h1 className="text-xl font-bold">Best Awarded Jobs Near You.</h1>
            <p>
              Our Academy is an online learning platform that provides one of the
              best e-learning Academy.
            </p>
            <button className="text-secondary font-bold">Read More...</button>
          </div> 
        </div>
        <div className="relative">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={explore1} alt="Shoes" />
            </figure>
          </div>
          <div className=" md:w-80 bg-base-100  p-8 shadow-xl absolute -bottom-44 space-y-5">
            <h1 className="text-xl font-bold">Best Awarded Jobs Near You.</h1>
            <p>
              Our Academy is an online learning platform that provides one of the
              best e-learning Academy.
            </p>
            <button className="text-secondary font-bold">Read More...</button>
          </div> 
        </div>
  
        <div className="relative md:mt-48 lg:mt-0">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={explore1} alt="Shoes" />
            </figure>
          </div>
          <div className=" md:w-80 bg-base-100  p-8 shadow-xl absolute -bottom-44 space-y-5">
            <h1 className="text-xl font-bold">Best Awarded Jobs Near You.</h1>
            <p>
              Our Academy is an online learning platform that provides one of the
              best e-learning Academy.
            </p>
            <button className="text-secondary font-bold">Read More...</button>
          </div> 
        </div>
      </div>
   </div>
  );
};

export default MoreExplore;
