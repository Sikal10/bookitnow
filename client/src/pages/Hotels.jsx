import {useState} from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchResult from "../components/SearchResult";
import Footer from "../components/Footer";
import SaveTime from "../components/SaveTime";
import {useQuery} from "react-query";
import {getSearchedHotels} from "../api/hotels.api";

const Hotels = () => {
    const location = useLocation();

    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(undefined);
    const [maxPrice, setMaxPrice] = useState(undefined);

    const startDate = date[0].startDate;
    const endDate = date[0].endDate;

    const {isLoading, data, refetch} = useQuery("searchedHotels", () => getSearchedHotels(destination, minPrice, maxPrice));

    const handleSearch = async () => await refetch();

    if (isLoading) return <h2>Loading...</h2>

    return (
        <div>
            <Navigation />
            <Header type={"hotels"}/>

            <div className="hotels">
                <div className="hotels__container">
                    <div className="hotels__container-search">
                        <h2 className={"search-header"}>Search</h2>

                        <div className="search-items">
                            <div className="search-item">
                                <label>Destination</label>
                                <input className={"destination-input"} type="text" placeholder={destination}/>

                            </div>

                            <div className="search-item">
                                <label>Check-in date</label>
                                <span onClick={() => setIsDateOpen(!isDateOpen)} className={"search-item-date"}>
                                    {`${format(startDate, "MM/dd/yyyy")} to ${format(endDate, "MM/dd/yyyy")}`}
                                </span>
                                {isDateOpen && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    // className={"date-picker"}
                                />}
                            </div>

                            <div className="search-item">
                                <label>Options</label>

                                <div className="option-item-container">
                                    <div className="search__option-item">
                                        <span className={"option-item-text"}>Min price (per night)</span>
                                        <input onChange={e => setMinPrice(e.target.value)} type="number"/>
                                    </div>
                                    <div className="search__option-item">
                                        <span className={"option-item-text"}>Max price (per night)</span>
                                        <input onChange={e => setMaxPrice(e.target.value)} type="number"/>
                                    </div>
                                    <div className="search__option-item">
                                        <span className={"option-item-text"}>Adult</span>
                                        <input type="number" placeholder={options.adult}/>
                                    </div>
                                    <div className="search__option-item">
                                        <span className={"option-item-text"}>Children</span>
                                        <input type="number" placeholder={options.children}/>
                                    </div>
                                    <div className="search__option-item">
                                        <span className={"option-item-text"}>Room</span>
                                        <input type="number" placeholder={options.room}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleSearch} className={"search-button"}>Search</button>
                    </div>

                    <div className="hotels__container-results">
                        {data?.hotels?.map((hotel, index) => <SearchResult hotel={hotel} key={index} />)}
                    </div>
                </div>
            </div>

            <div className={"hotels__save-time"}>
                <SaveTime />
            </div>

            <Footer />
        </div>
    );
};

export default Hotels;