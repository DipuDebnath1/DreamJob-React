import { FaCircleDollarToSlot, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const AppliedJobCard = ({job}) => {
    const{ id,logo,job_title,company_name,location,salary,job_type,remote_or_onsite} = job;
    return (
        <div>
            
             <div className="flex flex-col gap-5 p-8">
            <figure><img className="h-24" src={logo} alt="" /></figure>
            <h3 className="text-xl font-bold">{job_title}</h3>
            <p>{company_name}</p>
            <div>
                <button className="bg-indigo-100 py-2 px-3 rounded">{job_type}</button>
                <button className="bg-indigo-100 py-2 px-3 rounded  ml-5">{remote_or_onsite}</button>
            </div>
            <div className="flex gap-5">
                <p className="flex items-center"><span><FaLocationDot/></span>{location}</p>
                <p className="flex items-center"><span><FaCircleDollarToSlot/> </span>{salary}</p>
            </div>
            <div><button className="btn btn-primary"><Link to={`/${id}`}>View Details</Link></button></div>
        </div>
        </div>
    );
};


AppliedJobCard.propTypes = {
    job:PropTypes.object
}
export default AppliedJobCard;