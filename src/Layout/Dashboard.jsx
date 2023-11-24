import { useContext } from "react";
import { FcMenu } from "react-icons/fc";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faIdCard, faImages, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <label htmlFor="my-drawer-2" className="lg:hidden"><FcMenu className="text-5xl mb-12" /></label>
                    <div className="lg:ml-[288px] ">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side h-full">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-72 h-full fixed bg-[#c6dcf9] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
                        {/* Sidebar content here */}
                        <div className=" bg-white p-5 rounded-lg flex flex-col">



                            <div className="flex flex-col items-center justify-center gap-2 my-1">
                                <div className="avatar ">
                                    <div className="w-16 rounded-full">
                                        <img className="text-center" src={user?.photoURL} />
                                    </div>

                                </div>
                                <h3 className="font-Russo">{user?.displayName}</h3>
                                <h3 className="font-Russo">{user?.email}</h3>
                            </div>

                           


                        </div>
                        <div className="border border-gray-600 my-5"></div>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/addQuiz' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/addQuiz"><FontAwesomeIcon icon={faIdCard} />Add Quiz
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`hover:text-white hover:bg-gray-500 hover:transition-colors hover:duration-500 ${location.pathname === '/dashboard/manageQuiz' ? 'bg-gray-400 bg-opacity-40' : ''}`}
                                to="/dashboard/manageQuiz"><FontAwesomeIcon icon={faGraduationCap} /> Mange Quiz
                            </Link>
                        </li>
                     


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;