import React, { useEffect, useState } from 'react'
import avatarr from '../Assets/avatar/download.png'
import '../styles/profile.css'
import { RiEdit2Fill } from "react-icons/ri";
import { MdOutlineDownloadDone } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoIosCamera } from "react-icons/io";
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom"
import { TbArrowNarrowLeft } from "react-icons/tb";
import Navigation from '../components/Navigation';

const UpdateProfile = () => {
    const { currentUser, update } = useAuth();

    const [file, setFile] = useState(null);
    const [photoURL, setPhotoURL] = useState(currentUser.photoURL ?? null);
    const [isChoosing, setIsChoosing] = useState(false)


    useEffect(() => {
        if (currentUser.photoURL) {
            setPhotoURL(currentUser.photoURL)
        }
    }, [])


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setIsChoosing(true)
            setPhotoURL(URL.createObjectURL(file));
        }
    };


    const handleUpload = () => {
        update(photoURL)
        document.getElementById("savedAnimation").classList.add('saved_animation')
        setTimeout(() => {
            setIsChoosing(false)
            document.getElementById("savedAnimation").classList.remove('saved_animation')

        }, 100);
    }



    return (
        <>
            <div className='profile-container'>

                <Link  to="/"> <TbArrowNarrowLeft className="auth_back-arr" /> </Link>

                <div className='profile_header'>
                    <div className='profile_header_imgS'>
                        <img src={photoURL != null ? photoURL : avatarr} className='profile_header_user-avater' alt="profie you" />
                        {
                            !isChoosing ?
                                <>
                                    <input className='profile_input' t onChange={(e) => handleImageChange(e)} type="file" accept='image/*' id='profilePhoto' />
                                    <IoIosCamera className='profile_header_imgS_eddit' /></>
                                :
                                <>
                                    <button className='profile_submit' onClick={handleUpload}>upload</button>
                                    <IoCheckmarkDoneCircle id='savedAnimation' className='profile_header_imgS_save' /></>
                        }

                    </div>
                    <h1 className='profile_user-name'>Ahmed Shobky</h1>
                </div>

            </div>
        </>

    )
}

export default UpdateProfile