import {useQuery} from "react-query";
import {getFeaturedHotels} from "../api/hotels.api";

const GuestsHomes = () => {
    const {data} = useQuery("featuredHotels", () => getFeaturedHotels());

    return (
        <div className={"guests__home"}>
            {data?.hotels?.map((item, index) => <div key={index} className={"guests__home-item"}>
                <img className={"guests__home-item-img"} src={item.photos[0]} alt=""/>
                <h2>{item.name}</h2>
                <p className={"guest-city"}>{item.city}</p>
                <p className={"guest-price"}>Starting from ${item.cheapestPrice}</p>
                {item.rating && <div className={"guest-rating"}>
                    <span>{item.rating} </span>
                    <p>Excellent</p>
                </div>}

            </div>)}
        </div>
    );
};

export default GuestsHomes;