import axios from "axios";

export const getAllHotels = () => axios.get("/api/hotels").then((res) => {
    console.log("hotels--->", res);
    return res.data.hotels;
});

export const getFeaturedHotels = () => axios.get("/api/hotels?featured=true&limit=4").then((res) => res.data);

export const getOneHotel = (id) => axios.get(`/api/hotels/${id}`).then((res) => {
    console.log("hotel--->", res);
    return res;
    // return res.data.hotel;
});

export const getHotelsByCity = async (cities) => {
    const {data} = await axios.get(`/api/hotels/countByCity?cities=${cities}`);
    return data;
};

export const getHotelsByType = async () => {
    const {data} = await axios.get("/api/hotels/countByType");
    return data;
}