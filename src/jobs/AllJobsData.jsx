import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const AllJobsData = () => {

    const [jobs,setJobs] = useState([]);
    const [cardLength,setCardLength] = useState(4);

    const seeAllCard = () =>{
        setCardLength(jobs.length)
    }

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    return (
        <div>
                <div className="text-center py-8">
                    <h2 className="text-5xl font-semibold">Featured Jobs</h2>
                    <p className="pt-4 ">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 py-10">
                    {
                    jobs.slice(0,cardLength).map(jobData=><JobCard key={jobData.id} jobData={jobData}></JobCard>)
                    }
                </div>
                

                {
                 jobs.length > cardLength && <div className="text-center pb-10"><button className="btn btn-primary" onClick={seeAllCard}>See All</button></div> 
                }
                
        </div>
    );
};

export default AllJobsData;