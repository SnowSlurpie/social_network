// Requires schema and model from mongoose
const { Schema } = require('mongoose');

// Constructs new instance of schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: [true, 'Please enter a reaction'],
        minLength: 1,
        maxLength: 280
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
    },
    createdAt: {
        type: Date,
        default: Date.now()  
    }
})

module.exports = reactionSchema;