import mongoose from 'mongoose';
const schema = mongoose.Schema({
    firstname: String,
    lastname: Number,
    password: String,
    isAdmin: Boolean,
    isArlines: Boolean
    }, {collection: 'webdev-project'}
);
export default schema;