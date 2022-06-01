import React from 'react';
import {FaBed, FaPlane, FaCarAlt, FaTaxi} from "react-icons/fa";
import {MdBed, MdCalendarToday, MdPerson} from "react-icons/md";
import {useState} from "react";
import {DateRange} from "react-date-range";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
    }]);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 2,
        room: 1
    });
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [destination, setDestination] = useState("");

    const startDate = date[0].startDate;
    const endDate = date[0].endDate;

    const navigate = useNavigate();

    const handleOption = (name, operation) => setOptions(prev => {
        return {
            ...prev,
            [name]: operation === "increase" ? options[name] + 1 : options[name] - 1
        }
    });

    const handleSearch = () => {
        navigate("/hotels", {
            state: {destination, options, date}
        })
    }

    return (
        <div className={"header"}>
            <div className={type === "hotels" ? "header__container header-hotels" : "header__container"}>
                <div className="header__container-lists">
                    <div className={"header-link active"}>
                        <FaBed />
                        <span>Stays</span>
                    </div>

                    <div className={"header-link"}>
                        <FaPlane />
                        <span>Flights</span>
                    </div>

                    <div className={"header-link"}>
                        <FaCarAlt />
                        <span>Car Rentals</span>
                    </div>

                    <div className={"header-link"}>
                        <FaBed />
                        <span>Attractions</span>
                    </div>

                    <div className={"header-link"}>
                        <FaTaxi />
                        <span>Airport Taxis</span>
                    </div>
                </div>

                {type !== "hotels" && <>
                    <h2 className="header__container-title">
                        A lifetime of discounts? It's Genius.
                    </h2>

                    <p className={"header__container-description"}>
                        Get rewarded for your travels – unlock instant savings of 10% or more with a free Bookit.com account
                    </p>

                    <button className={"header__container-register"}>Register</button>

                    <div className="header__container-searchBar">
                        <div className="searchBarItem">
                            <MdBed className={"icon"} />
                            <input onChange={(e) => setDestination(e.target.value)} type="text" placeholder={"Where are you going?"}/>
                        </div>

                        <div className="searchBarItem">
                            <MdCalendarToday className={"icon"} />
                            <span onClick={() => setIsDateOpen(!isDateOpen)}>{date ? `${format(startDate, "MM/dd/yyyy")} to ${format(endDate, "MM/dd/yyyy")}` : "Check in - Check out"} </span>
                            {isDateOpen &&  <DateRange
                                minDate={new Date()}
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className={"date-picker"}
                            />}
                        </div>

                        <div className="searchBarItem" >
                            <MdPerson className={"icon"} />
                            <span onClick={() => setIsOptionsOpen(!isOptionsOpen)}>{`${options.adult} adult(s) ${options.children} children ${options.room} room(s)`}</span>

                            {isOptionsOpen && <div className={"options-container"}>
                                <div className="option">
                                    <span className={"option-text"}>Adult</span>
                                    <div className={"option__counter"}>
                                        <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "decrease")} className={"option__counter-button"}>-</button>
                                        <span className={"option__counter-number"}>{options.adult}</span>
                                        <button onClick={() => handleOption("adult", "increase")} className={"option__counter-button"}>+</button>
                                    </div>
                                </div>
                                <div className="option">
                                    <span className={"option-text"}>Children</span>
                                    <div className={"option__counter"}>
                                        <button disabled={options.children <= 1} onClick={() => handleOption("children", "decrease")} className={"option__counter-button"}>-</button>
                                        <span className={"option__counter-number"}>{options.children}</span>
                                        <button onClick={() => handleOption("children", "increase")} className={"option__counter-button"}>+</button>
                                    </div>
                                </div>
                                <div className="option">
                                    <span className={"option-text"}>Room</span>
                                    <div className={"option__counter"}>
                                        <button disabled={options.room <= 1} onClick={() => handleOption("room", "decrease")} className={"option__counter-button"}>-</button>
                                        <span className={"option__counter-number"}>{options.room}</span>
                                        <button onClick={() => handleOption("room", "increase")} className={"option__counter-button"}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        <div className="searchBarItem" onClick={handleSearch}>
                            Search
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default Header;