import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';


const WebDevelopment = () => {
    const [allJobs, setAllJobs] = useState([])
    useEffect(() => {
        axios.get(' https://dream-job-finder-server.vercel.app/addjobs/web%20development')
        .then(res => {
            setAllJobs(res.data)
        })
    }, [])

    console.log(allJobs);
    return (
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center px-4'>
            {
                allJobs.map(job => <Card key={job._id} job={job}></Card>)
            }
        </div>
    );
};

export default WebDevelopment;