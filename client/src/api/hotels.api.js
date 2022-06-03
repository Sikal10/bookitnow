import axios from "axios";

export const getFeaturedHotels = () => axios.get("/api/hotels?featured=true&limit=4").then((res) => res.data);

export const getOneHotel = id => axios.get(`/api/hotels/find/${id}`).then((res) => res.data);

export const getHotelsByCity = async (cities) => {
    const {data} = await axios.get(`/api/hotels/countByCity?cities=${cities}`);
    return data;
};

export const getHotelsByType = async () => {
    const {data} = await axios.get("/api/hotels/countByType");
    return data;
};

export const getSearchedHotels = async (destination, minPrice, maxPrice) => {
    const {data} = await axios.get(`/api/hotels?city=${destination}&minPrice=${minPrice || 0}&maxPrice=${maxPrice || 999}`);
    return data;
}