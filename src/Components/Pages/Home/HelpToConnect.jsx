import help from "../../../assets/help.jpg"


const HelpToConnect = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-4 my-16">
      <div className="flex items-center">
        <img src={help} alt="" />
      </div>
      <div className="flex items-center">
      <div className="space-y-10">
        <h1 className="text-3xl font-bold"><span className="text-secondary">We Help You</span> To Connect With The Organization.</h1>
        <p>
          We are dedicated to helping job seekers discover and connect with
          organizations offering employment opportunities. Our platform
          streamlines the job search process, providing users with a
          user-friendly interface to search for, apply to, and connect with
          organizations that align with their career aspirations. We strive to
          empower individuals in their quest for meaningful employment by making
          the job-hunting experience more efficient and effective.
        </p>

        <div className="flex gap-5">
        <button className="btn btn-primary">Get Started</button>
        <button className="btn btn-secondary">Upload Resume</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HelpToConnect;
