import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const loadedJob = useLoaderData()
    const {email, jobTitle, deadline, description, minimumPrice, maximumPrice, category} = loadedJob

    
    return (
        <div>
            Job details
        </div>
    );
};

export default JobDetails;