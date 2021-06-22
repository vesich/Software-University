const Hotel = require('../models/Hotel');
const User = require('../models/User')


async function createHotel(hotelData) {
    const hotel = new Hotel(hotelData);
    await hotel.save();

    return hotel;
}

async function getAllHotels() {
    const hotels = await Hotel.find({}).lean()

    return hotels;
}

async function getHotelById(id) {
    const hotel = await Hotel.findById(id).lean();

    return hotel;
}

async function bookHotel(hotelId, userId) {

    const hotel = await Hotel.findById(hotelId);
    const user = await User.findById(userId);

    if (userId == hotel.owner) {
        throw new Error('Cannot book hotel you have created!')
    }
    user.bookedHotels.push(hotel);
    hotel.bookedBy.push(user);

    return Promise.all([user.save(), hotel.save()])
}

async function editHotel(id, hotel) {
    const existing = await Hotel.findById(id);

    if (!existing) {
        throw new ReferenceError('No such id in database.')
    }
    Object.assign(existing, hotel)
    return existing.save();
}

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    bookHotel,
    editHotel
}
