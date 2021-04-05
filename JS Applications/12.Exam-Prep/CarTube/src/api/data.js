import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

// REST operations
// get all ads
// get ad by id
// create ad
// edit ad by id
// delete ad by id
// get my ads

export async function getAllAds(page = 1) {
    return await api.get(host + `/data/cars?sortBy=_createdOn%20desc&offset=${(page - 1) * 3}&pageSize=3`);
}

export async function getAdById(id) {
    return await api.get(host + '/data/cars/' + id);
}

export async function createAd(body) {
    return await api.post(host + '/data/cars', body)
}

export async function updateAd(id, body) {
    return await api.put(host + '/data/cars/' + id, body);
}

export async function deleteAd(id) {
    return await api.del(host + '/data/cars/' + id);
}

export async function getMyAds(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function search(query) {
    return await api.get(host + `/data/cars?where=year%3D${query}`)
}

export async function getCollectionSize() {
    return await api.get(host + '/data/cars?count');
}