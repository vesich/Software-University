import * as api from './api.js'

const host = 'http://localhost:3030';
api.settings.host = host;


export async function getThemes() {
    return await api.get(host + '/jsonstore/collections/myboard/posts');

}

export async function getThemeById(id) {
    return await api.get(host + '/jsonstore/collections/myboard/posts/' + id);
}

export async function createTheme(theme) {
    return await api.post(host + '/jsonstore/collections/myboard/posts', theme)
}

export async function sendMessage(comment) {
    return await api.post(host + '/jsonstore/collections/myboard/comments', comment)
}

export async function getComments() {
    return await api.get(host + '/jsonstore/collections/myboard/comments');

}

