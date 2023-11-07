
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../WebDevelopment/Card';


const DigitalMarketing = () => {
    const [allJobs, setAllJobs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/addjobs/Digital%20Marketing')
        .then(res => {
            setAllJobs(res.data)
        })
    }, [])

    console.log(allJobs);
    return (
             <div className='grid grid-cols-1 md:grid-cols-2 px-4 gap-10 place-items-center'>
            {
                allJobs.map(job => <Card key={job._id} job={job}></Card>)
            }
        </div>
    
    );
};

export default DigitalMarketing;