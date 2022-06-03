import React, {useState} from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import {MdClose, MdLocationPin} from "react-icons/md";
import SaveTime from "../components/SaveTime";
import Footer from "../components/Footer";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useLocation} from "react-router-dom";
import {getOneHotel} from "../api/hotels.api";
import {useQuery} from "react-query";


const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openImage, setOpenImage] = useState(false);

    const handleImageClick = (index) => {
        setSlideNumber(index);
        setOpenImage(true)
    };

    /** get the hotel ID from the URL */
    const location = useLocation();
    const hotelID = location.pathname.split('/')[2];


    const {isLoading, data, isError, error} = useQuery(["hotel", hotelID], () => getOneHotel(hotelID), {
        enabled: Boolean(hotelID)
    });
    const {hotel: {name, distance, description, photos, rating, address, title, cheapestPrice}} = data;

    const lastSlide = photos.length - 1;

    const handleImageDirection = (direction) => {
        let newSlideNumber;

        if (direction === "prev") {
            newSlideNumber = slideNumber === 0 ? lastSlide : slideNumber - 1;
        } else {
            newSlideNumber= slideNumber === lastSlide ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    if (isLoading) return <h2>Loading...</h2>

    return (
        <div className={"hotel"}>
            <Navigation />
            <Header type={"hotels"} />

            <div className="hotel__container">

                {openImage && <div className="slider">
                    <FaArrowLeft onClick={() => handleImageDirection("prev")} className={"slider__left-icon"} />
                    <MdClose onClick={() => setOpenImage(false)} className={"slider__close-icon"} />
                    <div className="slider__wrapper">
                        <img className={"slider-image"} src={photos[slideNumber].image} alt=""/>
                    </div>
                    <FaArrowRight onClick={() => handleImageDirection("next")} className={"slider__right-icon"}/>
                </div>}

                <div className="hotel__container-wrapper">
                    <button className={"hotel-reserve"}>Reserve or Book Now!</button>
                    <h1 className={"hotel-name"}>{name}</h1>
                    <div className={"hotel-address"}>
                        <MdLocationPin className={"hotel-icon"} />
                        <span>{address}</span>
                    </div>
                    <span className={"hotel-location"}>Excellent location - {distance}m from center</span>
                    <span className={"hotel-price"}>Book a stay over ${cheapestPrice} at this property and get a free airport taxi</span>

                    <div className="hotel__images">
                        {photos.map(({image}, index) => {
                            return <div className={"hotel__images-wrapper"} key={index}>
                                <img onClick={() => handleImageClick(index)} src={image} className={"hotel-image"} alt=""/>
                            </div>
                        })}
                    </div>

                    <div className="hotel-details">
                        <div className="bottom-left">
                            <h2>{title}</h2>

                            <p>{description}</p>
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