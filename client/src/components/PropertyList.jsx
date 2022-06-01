import {useQuery} from "react-query";
import {getHotelsByType} from "../api/hotels.api";
import {images} from "../properties";

const PropertyList = () => {
    const {data} = useQuery("hotelsType", () => getHotelsByType());

    return (
        <div className={"property__list"}>

            {data && images.map((image, index) => <div key={index} className="property__list-item">
                    <img className={"property-image"}
                         src={image}
                         alt=""
                    />
                    <div className={"property-titles"}>
                        <h2 style={{textTransform: "capitalize"}}>{data[index].type}</h2>
                        <span>{data[index].count} {data[index].type}(s)</span>
                    </div>

                </div>)}

        </div>
    );
};

export default PropertyList;