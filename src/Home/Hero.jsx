
const Hero = () => {
    return (
        <div className="">
            <div className="hero  bg-indigo-100 pb-10 sm:pb-0">
              <div className="hero-content p-0 flex-col lg:flex-row-reverse">
               <figure className="flex-1 bottom-0"> <img className="mr-0" src="https://i.ibb.co/gzfMt1b/dipu-removebg-preview-1.png" /></figure>
                <div className="flex-1 px-12">
                  <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-indigo-600">Dream Job</span></h1>
                  <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;