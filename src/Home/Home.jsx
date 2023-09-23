import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import JobCatagory from "./JobCatagory";
import AllJobsData from "../jobs/AllJobsData";


const Home = () => {
    const AlljobCatagory = useLoaderData();



    return (
        <div>

          <Hero></Hero>
          <div className="w-11/12 mx-auto">
            <div className="text-center py-8 mt-6">
              <h2 className="text-5xl font-semibold">Job Category List</h2>
                <p className="pt-4 pb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
            
              <div className=" gap-5 grid md:grid-cols-2 lg:grid-cols-4">
                {
                AlljobCatagory.map(jobData=> <JobCatagory  key={jobData.id} jobData={jobData}></JobCatagory> )
                }
              </div>
              </div>

              {/* jobs  */}
            <AllJobsData></AllJobsData>
          </div>



        </div>
    );
};

export default Home;