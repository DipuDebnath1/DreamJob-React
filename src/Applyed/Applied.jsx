
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "./AppliedJobCard";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../localStorage/LoacalStoage";

const Applied = () => {

    const [appliedJobs,setAppliedJobs] = useState([]);
    const jobsData = useLoaderData();
    // alldataload 
    const AllJobsData = useLoaderData();


    // loaclStroge Data load
    useEffect(()=>{
       const appliedJobsId = getLocalStorage();
       const appliedJobs =  AllJobsData.filter(job=> appliedJobsId.includes(job.id))
       setAppliedJobs(appliedJobs);
        

    //    setAppliedJobs(savedJobs);
    
    },[jobsData])
    
    const handleClearData = () =>{
        localStorage.clear();
        setAppliedJobs([])

    }

   

    


    return (
        <div className="w-11/12 mx-auto py-10">
            <header><h2 className="text-center text-3xl font-semibold pb-5">You Applied {appliedJobs.length} Jobs </h2></header>
            <div className="text-center pb-10">
                {
                    appliedJobs.length>0 && <button className="btn btn-primary" onClick={handleClearData}>Clear All Jobs</button> 
                }
            </div>
          <div className="grid md:grid-cols-2 gap-5">
          {
            appliedJobs.length > 0 ? appliedJobs?.map(job=> <AppliedJobCard key={job.id} job={job}></AppliedJobCard>) : <div><h1 className="text-center font-bold text-3xl py-10">no applied jobs</h1></div>
           }
          </div>
        </div>
    );
};

export default Applied;