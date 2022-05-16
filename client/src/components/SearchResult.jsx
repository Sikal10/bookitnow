import React from 'react';

const SearchResult = () => {
    const link = "https://cdn.trendir.com/wp-content/uploads/old/house-design/flooded-house-1.jpg"
    return (
        <div className={"search__result"}>
            <img src={link} alt="" className={"search__result-image"}/>

            <div className="search__result-description">
                <h1 className={"result-title"}>Tower Street Apartments</h1>
                <span className={"result-distance"}>500m from center</span>
                <span className={"result-taxi"}>Free airport taxi</span>
                <span className={"result-subtitle"}>Studio apartment with air conditioning</span>
                <span className={"result-features"}>Entire studio 1 bathroom 21m<sup>2</sup> 1 full bed</span>
                <span className={"result-cancellation"}>Free cancellation</span>
                <span className={"result-cancellation-text"}>You can cancel later, so lock in this great price today!</span>


            </div>

            <div className="search__result-details">
                <div className="result-details-rating">
                    <span>Excellent</span>
                    <button>7.9</button>
                </div>

                <div className="result-details-text">
                    <span className="details-price">$123</span>
                    <span className={"details-tax"}>Includes taxes and fees</span>
                    <button>See availability</button>
                </div>
            </div>

        </div>
    );
};

export default SearchResult;