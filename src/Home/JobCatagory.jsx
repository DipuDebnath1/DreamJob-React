
const JobCatagory = ({jobData}) => {
    return (
        <div className=" p-3">
            <figure><img className="h-32 w-full" src={jobData.logo} alt="" /></figure>
              <h2 className="text-lg py-2 font-semibold">{jobData.category_name}</h2>
              <p>{jobData.availability}</p>
        </div>
    );
};

export default JobCatagory;