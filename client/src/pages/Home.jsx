import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Featured from "../components/Featured";
import {HiOutlineInformationCircle} from "react-icons/hi";
import {MdOutlineCancel} from "react-icons/md";
import {useState} from "react";
import PropertyList from "../components/PropertyList";
import {featuredData} from "../properties";
import {GrFormClose} from "react-icons/gr";
import GuestsHomes from "../components/GuestsHomes";
import Footer from "../components/Footer";
import Destinations from "../components/Destinations";
import SaveTime from "../components/SaveTime";

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDealsOpen, setIsDealsOpen] = useState(true);

    return (
        <div className={"home"}>
            <Navigation />
            <Header />

            <div className="home__container">
                <div className={"home__container-covid"}>
                    <div className={"covid-icon"}>
                        <HiOutlineInformationCircle className={"info-icon"} />
                    </div>

                    <p>Get the advice you need. Check the latest COVID-19 restrictions before you travel. <a href="">Learn more</a></p>
                </div>

                {isOpen && <div className={"home__container-explorer"}>
                    <div className={"explore-left"}>
                        <div className={"svg-container"}>
                            <svg width="36" fill="none" height="36" viewBox="0 0 128 128" style = {{ width: "inherit", height:"inherit"}}>
                                <path fill={"#ff8000"} d={"M 64 8 a 56 56 0 1 0 56 56 A 56 56 0 0 0 64 8 Z M 41 80 c 0 -4.4 3.1 -8 7 -8 s 7 3.6 7 8 s -3.1 8 -7 8 s -7 -3.6 -7 -8 Z m 18.5 23.6 A 4 4 0 0 1 54 105 a 4 4 0 0 1 -1.4 -5.5 l 18 -30.1 A 4 4 0 0 1 76 68 a 4 4 0 0 1 1.4 5.5 Z m 20.5 0.4 c -3.9 0 -7 -3.6 -7 -8 s 3.1 -8 7 -8 s 7 3.6 7 8 s -3.1 8 -7 8 Z m 12 -4.2 V 52.3 a 9.7 9.7 0 0 0 -2.7 -6.3 l -6 -5.5 a 24.6 24.6 0 0 1 -9 7.2 A 10.5 10.5 0 1 1 53.4 50 a 10.4 10.4 0 0 1 0.3 -2.3 A 10.5 10.5 0 0 1 64 39.5 a 14 14 0 0 0 11.6 -6.2 l -6.2 -5.7 a 8.1 8.1 0 0 0 -10.8 0 L 38.7 46 a 9.7 9.7 0 0 0 -2.7 6.3 v 47.5 a 45.4 45.4 0 0 1 7.2 -76.2 a 19.2 19.2 0 0 0 -0.2 1.9 a 20.9 20.9 0 0 0 2.3 9.6 l 2.7 -2.5 A 17.4 17.4 0 0 1 46.9 22 v -0.2 a 45.4 45.4 0 0 1 34.2 0 v 0.2 a 17.5 17.5 0 0 1 -13.6 20.6 L 64 43 a 7 7 0 0 0 -5.5 2.7 A 21 21 0 0 0 85 25.5 a 19.2 19.2 0 0 0 -0.2 -2 A 45.4 45.4 0 0 1 92 99.9 Z"} />
                            </svg>
                        </div>

                        <p>Score huge savings worldwide. <a href="">Search today's deals</a></p>
                    </div>

                    <MdOutlineCancel onClick={() => setIsOpen(false)} className={"explore-icon"} />
                </div>}

                <div className={"home__container-properties"}>
                    <h2 className={"property-heading"}>Browse by property type</h2>
                    <PropertyList />
                </div>

                <div className={"home__container-featured"}>
                    <div className={"featured-grid"}>
                        {featuredData.slice(0, 2).map((item) => <div>
                            <Featured item={item} />
                        </div>)}
                    </div>

                    <div className={"featured-grid-bottom"}>
                        {featuredData.slice(2, 5).map((item) => <div>
                            <Featured item={item} />
                        </div>)}
                    </div>
                </div>

                {isDealsOpen && <div className="home__container-subscribe">
                    <div className={"subscribe__left"}>
                        {/*logo*/}
                        <div className={"deal-svg-container"}>
                            <svg width={"96"} height={"96"} viewBox={"0 0 32 32"}>
                                <path fill={"rgb(254, 186, 2)"}
                                      d={"M 15.967 -0.072 C 7.158 -0.072 -0.008 7.106 -0.008 15.929 c 0 8.822 7.166 15.999 15.975 15.999 c 8.837 0 16.025 -7.177 16.025 -15.999 S 24.803 -0.072 15.967 -0.072 Z m 7.602 26.823 l 0.034 -0.134 c 0.054 -0.216 0.104 -0.431 0.157 -0.647 a 0.936 0.936 0 0 0 -1.147 -1.077 c -0.404 0.117 -0.461 -0.135 -0.462 -0.144 a 0.933 0.933 0 0 0 -0.77 -0.936 a 0.933 0.933 0 0 0 -0.543 0.062 c -0.246 0.03 -0.315 -0.106 -0.332 -0.155 a 0.938 0.938 0 0 0 -0.772 -0.91 a 1.011 1.011 0 0 0 -0.486 0.038 s -0.437 0.01 -0.335 -0.588 a 0.592 0.592 0 0 0 0.009 -0.186 l 0.698 -5.066 c 0.071 -0.654 -0.053 -1.048 -0.554 -1.132 c -0.543 -0.09 -0.822 0.29 -0.914 0.799 c 0 0 -1.602 7.001 -1.859 9.367 c -0.079 0.717 -0.143 1.843 -0.196 3.091 l -0.103 0.002 c -4.35 0 -8.208 -2.112 -10.61 -5.368 c 0.19 -0.455 0.524 -0.986 1.105 -1.529 c 1.589 -1.488 3.391 -0.193 3.972 0.058 c 0.582 0.25 3.469 1.043 3.934 -0.464 c 0 0 0.155 -0.522 0.116 -1.565 c 0 0 0.039 -0.483 0.775 -0.347 c 0.736 0.134 1.162 -0.812 0.406 -1.605 c 0 0 0.737 -0.56 1.124 -1.198 c 0.388 -0.637 -0.135 -0.676 -0.251 -0.772 c -0.116 -0.097 -0.426 -0.812 0.174 -1.024 s 2.481 -0.541 1.609 -1.933 c -0.872 -1.391 -1.512 -2.145 -1.802 -3.265 c -0.291 -1.121 -0.251 -1.372 0.136 -1.874 s 0.33 -1.237 0.33 -2.01 c 0 -0.294 0.035 -0.928 -0.023 -1.699 l -0.068 0.119 c -0.556 0.965 -1.855 1.774 -2.72 2.413 c -1.728 1.274 -3.82 1.951 -5.627 3.09 c -1.999 1.261 -3.188 3.21 -3.852 5.441 a 19.076 19.076 0 0 0 -0.717 4.099 c -0.036 0.528 -0.031 1.09 0.008 1.653 c -2.351 -4.849 -1.522 -10.844 2.512 -14.867 c 2.781 -2.773 6.502 -4.012 10.14 -3.758 l -0.002 -0.009 c 6.993 0.349 12.566 6.126 12.566 13.199 c 0 4.483 -2.241 8.442 -5.66 10.831 Z M 13.473 9.329 c 0.685 -0.495 1.112 -0.479 1.112 -0.479 a 0.785 0.785 0 1 1 0 1.57 a 0.78 0.78 0 0 1 -0.578 -0.261 c -0.374 -0.322 -0.534 -0.83 -0.534 -0.83 Z"}/>
                            </svg>
                        </div>

                        <div className={"subscribe__left-content"}>
                            <h2>Subscribe to see Secret Deals</h2>

                            <p>Prices drop the moment you sign up!</p>

                            <div className={"email-sub"}>
                                <input type="text" placeholder={"Enter email"}/>
                                <button>Subscribe</button>
                            </div>
                        </div>

                        <GrFormClose onClick={() => setIsDealsOpen(false)} className={"sub-icon"}/>
                    </div>
                </div>}

                <div className="home__container-guests">
                    <h2 className={"guests-title"}>Homes guests love</h2>
                    <GuestsHomes />
                </div>

                <div className="home__container-destinations">
                    <h2 className={"destination-title"}>Destinations we love</h2>
                    <Destinations />
                </div>
            </div>

            <div className="home__save-time">
                <SaveTime />
            </div>

            <Footer />
        </div>
    );
};

export default Home;