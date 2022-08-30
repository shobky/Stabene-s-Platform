
import Navigation from "../components/Navigation";
import "../styles/home.css"
import s3Img from '../Assets/Img/vector-music-melody-note-dancing-flow-shape-guitar-icon_31949-1487_auto_x2 (2).jpg'


const Home = () => {

    return (
        <>
            <Navigation />

            <div id="homeContainer" className="home-container">
                <div className="home_contentS1">
                    <h1 className="home_s1_text">
                        Weakly Bike Rides
                    </h1>
                    <h1 className="home_s1_text home_s1_text-clone">
                        Weakly Bike Rides
                    </h1>
                    <p className="home_s1_sub-text">Grap yours or rent one</p>
                    <p className="home_s1_sub-text2">see <span>Next Event</span></p>
                </div>
                <div className="home_contentS2">
                    <div className="home_s2_txt-container">
                        <h1 className="home_s2_text">
                            A Quite Work Space
                        </h1>
                        <h1 className="home_s2_text-clone">
                            A Quite Work Space
                        </h1>
                    </div>
                    <div className="home_contentS2bg">

                    </div>


                </div>
                <div className="home_contentS3">
                    <img className="home_contentS3_img" alt="guitar" src={s3Img} />
                    <div className="home_S3_txt-container">
                        <h1 className="home_s3_text">Music & Movie Nights</h1>
                        <p className="home_s3_sub-text">Gather with your freinds and listen to music played live in Stabene !
                        </p>
                    </div>
                </div>
                <div className="home_contentS4">

                    <h1 className="home_s4_text-clone">
                        Language Exchange Clubs
                    </h1>
                    <h1 className="home_s4_text">
                        Language Exchange Clubs
                    </h1>
                    <div className="home_s4_bg">
                    </div>

                </div>
            </div></>
    )
}

export default Home