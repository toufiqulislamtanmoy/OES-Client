import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Navbar = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, logout } = useContext(AuthContext);
    const [userRole, setUserRole] = useState(false);
    const handelLogOut = async () => {
        logout();

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/users/admin/${user?.email}`);
                setUserRole(response.data)
                console.log('User Data:', userRole);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user?.email, axiosSecure, userRole]);

    console.log(user);
    const navitem = <>
        <li>
            <Link to="/">
                Home
            </Link>
        </li>
        <li>
            <Link to="/quiz">
                Quiz
            </Link>
        </li>
        <li>
            <Link to="/ranking">
                Ranking
            </Link>
        </li>
    </>
    return (
        <div className="navbar bg-primary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
                        {
                            navitem
                        }
                    </ul>
                </div>
                <Link className="normal-case text-xl font-Kaushan px-4">O <span className="text-orange-400 ">E</span> S</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navitem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} title={user?.email} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
                                <li>
                                    { userRole?.admin &&
                                        <Link to="/dashboard/addQuiz" className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    }
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handelLogOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login" className="normal-case px-4">Login</Link>


                }

            </div>
        </div>
    );
};

export default Navbar;