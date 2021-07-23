const Furniture = require('../models/Furniture');

async function getAll() {
    return await Furniture.find({}).lean();
}

async function getById(id) {
    return Furniture.findById(id);
}

async function createItem(data) {
    const result = new Furniture(data);
    await result.save();
    return result;
}

async function update(original, updated) {
    Object.assign(original, updated);
    await original.save();
    return original;
}

async function del(id) {
    return Furniture.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    getById,
    createItem,
    update,
    del
}