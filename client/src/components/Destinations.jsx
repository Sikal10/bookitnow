import React, {useState} from 'react';

const Destinations = () => {
    const [isRegionActive, setIsRegionActive] = useState(true);
    const [isCitiesActive, setIsCitiesActive] = useState(false);
    const [isInterestsPlacesActive, setIsInterestsPlacesActive] = useState(false);

    const handleDestinationToggle = (destination) => {
        switch (destination) {
            case "region":
                setIsRegionActive(true);
                setIsCitiesActive(false);
                setIsInterestsPlacesActive(false);
                break;
            case "cities":
                setIsCitiesActive(true);
                setIsRegionActive(false);
                setIsInterestsPlacesActive(false);
                break;
            case "interestsPlaces":
                setIsInterestsPlacesActive(true);
                setIsRegionActive(false);
                setIsCitiesActive(false);
                break;
            default:
                setIsRegionActive(true);
        }
    }

    return (
        <div className={"destinations"}>
            <div className={"destinations__actions"}>
                <button onClick={() => handleDestinationToggle("region")} className={`${isRegionActive && "active"} region-btn`}>Regions</button>
                <button onClick={() => handleDestinationToggle("cities")} className={`${isCitiesActive && "active"} city-btn`}>Cities</button>
                <button onClick={() => handleDestinationToggle("interestsPlaces")} className={`${isInterestsPlacesActive && "active"} place-btn`}>Places of interest</button>
            </div>


            {isRegionActive && <div className={"destinations__regions"}>
                <div className={"regions-items"}>
                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Phuket Province</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Ibiza</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Guernsey</h2>
                        <p>2,507 properties</p>
                    </div>
                </div>

                <div className={"regions-items"}>
                    <div className={"region-item"}>
                        <h2>Uttar Pradesh</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Cornwallt</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Bora Bora</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Mykonos</h2>
                        <p>2,404 properties</p>
                    </div>
                </div>

                <div className={"regions-items"}>
                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>
                </div>

                <div className={"regions-items"}>
                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>
                </div>

                <div className={"regions-items"}>
                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>

                    <div className={"region-item"}>
                        <h2>Lake District</h2>
                        <p>2,404 properties</p>
                    </div>
                </div>

            </div>}

            {isCitiesActive && <div className={"destinations__cities"}>
                <div className="cities-items">
                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>

                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>

                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>
                </div>

                <div className="cities-items">
                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>

                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>

                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>
                </div>

                <div className="cities-items">
                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>

                    <div className="city-item">
                        <h2>Dallas, United States</h2>
                        <span>219 holiday rentals, 160 apartments, 70</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>

                    <div className="city-item">
                        <h2>Manchester, United Kingdom</h2>
                        <span>557 holiday rentals, 384 apartments, 131</span>
                        <span>cottages, 70 holiday homes, 70 villas</span>
                    </div>
                </div>

                <div className="cities-items">
                    <div className="city-item">
                        <h2>Bangkok</h2>
                        <span>4040 hotels</span>
                    </div>

                    <div className="city-item">
                        <h2>Edinburgh</h2>
                        <span>3343 hotels</span>
                    </div>

                    <div className="city-item">
                        <h2>Dublin</h2>
                        <span>4040 hotels</span>
                    </div>

                    <div className="city-item">
                        <h2>Mumbai</h2>
                        <span>3343 hotels</span>
                    </div>

                </div>
            </div>}

            {isInterestsPlacesActive && <div className={"destinations__interests-places"}>
                <div className="places-items">
                    <div className="place-item">
                        <h2>Uttar Pradesh</h2>
                        <span>4,370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Ras Al Khaimah</h2>
                        <span>113 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                </div>

                <div className="places-items">
                    <div className="place-item">
                        <h2>Uttar Pradesh</h2>
                        <span>4,370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Ras Al Khaimah</h2>
                        <span>113 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                </div>

                <div className="places-items">
                    <div className="place-item">
                        <h2>Uttar Pradesh</h2>
                        <span>4,370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Ras Al Khaimah</h2>
                        <span>113 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                </div>

                <div className="places-items">
                    <div className="place-item">
                        <h2>Uttar Pradesh</h2>
                        <span>4,370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Ras Al Khaimah</h2>
                        <span>113 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                </div>

                <div className="places-items">
                    <div className="place-item">
                        <h2>Uttar Pradesh</h2>
                        <span>4,370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Ras Al Khaimah</h2>
                        <span>113 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                    <div className="place-item">
                        <h2>Tenerife</h2>
                        <span>370 properties</span>
                    </div>
                </div>

            </div>}
        </div>
    );
};

export default Destinations;