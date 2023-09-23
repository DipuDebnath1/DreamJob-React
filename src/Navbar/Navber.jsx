import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <nav className="w-11/12 mx-auto">
                <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                       <li><NavLink to={'/applied'}>Applied Jobs</NavLink></li>
                       <li><NavLink to={'/Blog'}>Blog</NavLink></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"> DreamJOB</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                       <li><NavLink to={'/applied'}>Applied Jobs</NavLink></li>
                       <li><NavLink to={'/Blog'}>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn">Start Applying</a>
                </div>
                </div>
        </nav>
    );
};

export default Navber;