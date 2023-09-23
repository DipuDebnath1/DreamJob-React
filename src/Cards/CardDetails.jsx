

import { useLoaderData, useParams } from "react-router-dom";
import { saveLocalStorage } from "../localStorage/LoacalStoage";
import Swal from "sweetalert2";

const CardDetails = () => {

    const AllCard = useLoaderData()
    const param = useParams()



    const cardDetails = AllCard.find(card=>card.id==param.id)
    const {logo, job_title,contact_information,  salary, id, job_responsibility, job_description,educational_requirements,experiences} = cardDetails;


   // // set local host 
    const handleApply = () =>{
       
        
    const isSet = saveLocalStorage(id);
    if(isSet){
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This Job already added',
          })
    }
  
    } 



    
    return (
        <div>
          
           <main className="w-11/12 mx-auto">
                <figure className="py-10">
                    <img src={logo} className="mx-auto h-16" alt="" />
                </figure>
               <div className="py-8 flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-8/12 flex flex-col gap-4"> 
                            <p><span className="text-lg font-semibold"> Job Description : </span> {job_description}</p>
                            <p><span className="text-lg font-semibold"> Job Responsibility : </span>{job_responsibility}</p>
                            <p><span className="text-lg font-semibold"> Educational Requirements :</span> {educational_requirements}</p>
                            <p><span className="text-lg font-semibold">Experiences :</span> {experiences}</p>
                        </div>
                        <div className="w-full md:w-4/12 bg-indigo-100 p-4 rounded-md">
                            <h4 className=" py-3 text-xl font-semibold">Job Details </h4>  
                            <hr />
                            <p><span className="text-lg font-normal">Salary :</span>{salary}</p>  
                            <p><span className="text-lg font-normal">Job Title :</span>{job_title}</p>

                            <h4 className=" py-3 text-xl font-semibold">Contact Information</h4>
                            <hr /> 
                            <p><span className="text-lg font-normal">Phon : {contact_information?.phone}</span></p> 
                            <p><span className="text-lg font-normal">Email : {contact_information?.email}</span></p> 
                            <p><span className="text-lg font-normal">Address : {contact_information?.address}</span></p> 
                            <button className="btn btn-primary w-full mt-4" onClick={handleApply}>Apply Now</button>
                        </div>
               </div>
           </main>
        </div>
    );
};

export default CardDetails;