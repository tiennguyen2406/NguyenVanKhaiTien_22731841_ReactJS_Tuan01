import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Menu() {
    return (
        <div className="p-4 h-full flex flex-col">
            <div>
                <img src="/img/Image 1858.png" alt="Logo" />
            </div>
            <nav className="flex-1 my-5">
                <ul className="space-y-2">
                    <li className='li_Menu'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${isActive ? 'bg-pink-500 text-white' : ''
                                }`
                            }
                        >
                            <img src="../img/Squares four 1.png" alt="" />
                            <span className="ml-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className='li_Menu'>
                        <NavLink
                            to="/pj1"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${isActive ? 'bg-pink-500 text-white' : ''
                                }`
                            }
                        >
                            <img src="../img/Folder.png" alt="" />
                            <span className="ml-3">Project</span>
                        </NavLink>
                    </li>
                    <li className='li_Menu'>
                        <NavLink
                            to="/Tearms"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${isActive ? 'bg-pink-500 text-white' : ''
                                }`
                            }
                        >
                            <img src="../img/Groups.png" alt="" />
                            <span className="ml-3">Terms</span>
                        </NavLink>
                    </li>
                    <li className='li_Menu'>
                        <NavLink
                            to="/Analytics"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${isActive ? 'bg-pink-500 text-white' : ''
                                }`
                            }
                        >
                            <img src="../img/Pie chart.png" alt="" />
                            <span className="ml-3">Analytics</span>
                        </NavLink>
                    </li>
                    <li className='li_Menu'>
                        <NavLink
                            to="/Mesage"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${isActive ? 'bg-pink-500 text-white' : ''
                                }`
                            }
                        >
                            <img src="../img/Chat.png" alt="" />
                            <span className="ml-3">Messages</span>
                        </NavLink>
                    </li>
                    <li className='li_Menu'>
                        <NavLink
                            to="/Intergration"
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg hover:bg-pink-500 ${isActive ? 'bg-pink-500 text-white' : ''
                                }`
                            }
                        >
                            <img src="../img/Code.png" alt="" />
                            <span className="ml-3">Intergrations</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="mt-6">
                <img src="/img/Group.png" alt="Decorative" />
            </div>

            <div className="mt-auto p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-800">V2.0 is available</p>
                <button className="mt-2 w-full py-2 px-4 bg-white border-blue-700 border-2 text-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
                    Try now!
                </button>
            </div>
        </div>
    );
}

export default Menu;
