import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/components/navigation.css'
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import avatar from '../Assets/avatar/download.png'


const Navigation = () => {
    const [visible, setVisible] = useState(false);
    const { currentUser, logout } = useAuth();
    

    const navigate = useNavigate()


    const showNavMenu = () => {
        setVisible(!visible)
        const navMenu = document.getElementById('mob_nav_container');
        if (!visible) {
            navMenu.classList.remove("nav-menu-hidden")
            // document.body.style.overflow = "hidden"
        } else {
            navMenu.classList.add("nav-menu-hidden")
            // document.body.style.overflow = "scroll"

        }
    }

    const handleLogOut = async () => {
        try {
            await logout()
            navigate("/login")

        } catch {
        }
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-75px";
        }
        prevScrollpos = currentScrollPos;
    }
    console.log(currentUser)
    return (
        <div id='navbar' className="df_js-sb_al-c ">
            <div className="df_js-sb">
                <div className="mobile-header-container">
                    <div className="nav_authnav-btn-container" >
                        <h1 onClick={showNavMenu} className="burger"> {visible ? <RiCloseLine className="nav_close-icon" /> : <HiMenuAlt4 />} </h1>
                        <h1 className="nav_name">Stabene</h1>
                    </div>
                    {currentUser ? <Link className='nav_auth-btn' to="/profile">{currentUser.displayName ?? "Edit"}</Link> : <Link className='nav_auth-btn' to="/login">Log in</Link>}


                </div>
                <div id='mob_nav_container' onClick={showNavMenu} className="nav-container mobile-nav-container nav-menu-hidden">
                    <Link to={"/profile"} className='nav_user-section'>
                        <img alt='you' className='nav_user-photo' src={currentUser ? currentUser.photoURL : avatar} />
                        <h2 className='nav_username'>{currentUser ? currentUser.displayName : "you"}</h2>
                        <div className='nav_line'></div>
                    </Link>

                    <div className="nav_link-group">
                        <Link className="nav_link" to="/home">home</Link>
                        <Link className="nav_link" to="/">events</Link>
                        <Link className="nav_link" to="/">coffe shop</Link>
                        <Link className="nav_link" to="profile">profile</Link>
                        <Link className="nav_link" to="/">orders</Link>
                        {currentUser ? 
                        <button className='nav_btn' onClick={handleLogOut}>logout</button>
                        :
                        <Link className="nav_btn" to="/login">log in</Link>

                    }
                    </div>
                    <div className="nav_user-info">
                        <p>username</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navigation