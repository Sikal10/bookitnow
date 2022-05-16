import React, {useState} from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import {MdClose, MdLocationPin} from "react-icons/md";
import {hotelPhotos} from "../properties";
import SaveTime from "../components/SaveTime";
import Footer from "../components/Footer";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openImage, setOpenImage] = useState(false);

    const handleImageClick = (index) => {
        setSlideNumber(index);
        setOpenImage(true)
    };

    const lastSlide = hotelPhotos.length - 1;

    const handleImageDirection = (direction) => {
        let newSlideNumber;

        if (direction === "prev") {
            newSlideNumber = slideNumber === 0 ? lastSlide : slideNumber - 1;
        } else {
            newSlideNumber= slideNumber === lastSlide ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div className={"hotel"}>
            <Navigation />
            <Header type={"hotels"} />

            <div className="hotel__container">

                {openImage && <div className="slider">
                    <FaArrowLeft onClick={() => handleImageDirection("prev")} className={"slider__left-icon"} />
                    <MdClose onClick={() => setOpenImage(false)} className={"slider__close-icon"} />
                    <div className="slider__wrapper">
                        <img className={"slider-image"} src={hotelPhotos[slideNumber].image} alt=""/>
                    </div>
                    <FaArrowRight onClick={() => handleImageDirection("next")} className={"slider__right-icon"}/>
                </div>}

                <div className="hotel__container-wrapper">
                    <button className={"hotel-reserve"}>Reserve or Book Now!</button>
                    <h1 className={"hotel-name"}>Tower Street Apartments</h1>
                    <div className={"hotel-address"}>
                        <MdLocationPin className={"hotel-icon"} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className={"hotel-location"}>Excellent location - 500m from center</span>
                    <span className={"hotel-price"}>Book a stay over $114 at this property and get a free airport taxi</span>

                    <div className="hotel__images">
                        {hotelPhotos.map(({image}, index) => {
                            return <div className={"hotel__images-wrapper"} key={index}>
                                <img onClick={() => handleImageClick(index)} src={image} className={"hotel-image"} alt=""/>
                            </div>
                        })}
                    </div>

                    <div className="hotel-details">
                        <div className="bottom-left">
                            <h2>Stay in the heart of Madrid</h2>

                            <p>Abra Cadabra Suites is situated in the Madrid City Centre district in Madrid, 700 m from Plaza Mayor
                                Madrid and 350 m from Madrid Cathedral and Royal Palace. Free WiFi is available.
                            </p>

                            <p>Every room at this guest house is air conditioned and is fitted with a flat-screen TV. A balcony or patio are featured in certain rooms.
                                For your comfort, you will find 3 shared bathrooms, free toiletries and a hair dryer.
                            </p>

                            <p>You will find a tour desk at the property.</p>

                            <p>Puerta de Toledo is 700 m from Abra Cadabra Suites, while Puerta del Sol is 1 km away.
                                Adolfo Suarez Madrid-Barajas Airport is 14 km from the property.
                            </p>

                            <p>This is our guests' favourite part of Madrid, according to independent reviews.</p>

                            <p>Couples particularly like the location — they rated it 8.6 for a two-person trip.</p>
                        </div>

                        <div className="bottom-right">
                            <h2 className={"hotel-title"}>Perfect for a 9-night stay</h2>

                            <p>	Situated in the real heart of Madrid, this property has an excellent location score of 8.6</p>

                            <span>$800 <b>(9 nights)</b></span>

                            <button>Reserve.</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"hotel__save-time"}>
                <SaveTime />
            </div>

            <Footer />
        </div>
    );
};

export default Hotel;