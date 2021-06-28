const { Schema, model } = require('mongoose');

const schema = new Schema({
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    gender: { type: String, required: true },
    tripsHistory: [{ type: Schema.Types.ObjectId, ref: 'Trip', default: [] }]
})

module.exports = model('User', schema)