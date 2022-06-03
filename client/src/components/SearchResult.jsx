import {Link} from "react-router-dom";

const SearchResult = ({hotel}) => {
    const {name, distance, description, photos, rating, _id} = hotel;

    const link = "https://cdn.trendir.com/wp-content/uploads/old/house-design/flooded-house-1.jpg"
    return (
        <div className={"search__result"}>
            <img src={link} alt="" className={"search__result-image"}/>

            <div className="search__result-description">
                <h1 className={"result-title"}>{name}</h1>
                <span className={"result-distance"}>{distance}m from center</span>
                <span className={"result-taxi"}>Free airport taxi</span>
                <span className={"result-subtitle"}>Studio apartment with air conditioning</span>
                <span className={"result-features"}>{description}</span>
                <span className={"result-cancellation"}>Free cancellation</span>
                <span className={"result-cancellation-text"}>You can cancel later, so lock in this great price today!</span>

            </div>

            <div className="search__result-details">
                {rating && <div className="result-details-rating">
                    <span>Excellent</span>
                    <button>{rating}</button>
                </div>}

                <div className="result-details-text">
                    <span className="details-price">$123</span>
                    <span className={"details-tax"}>Includes taxes and fees</span>
                    <button><Link to={`/hotels/${_id}`}>See availability</Link></button>
                </div>
            </div>

        </div>
    );
};

export default SearchResult;