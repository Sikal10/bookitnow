import {properties} from "../properties";

const PropertyList = () => {
    return (
        <div className={"property__list"}>

            {properties.map((property, index) => <div key={index} className="property__list-item">
                    <img className={"property-image"}
                         src={property.img}
                         alt=""
                    />

                    <div className={"property-titles"}>
                        <h2>{property.title}</h2>
                        <span>{property.count}</span>
                    </div>

                </div>
            )}

        </div>
    );
};

export default PropertyList;