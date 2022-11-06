/**
 * @file Implements mongoose schema to CRUD for
 * documents in the tuit collection
 */
import mongoose, {Schema} from "mongoose";
/**
 * @typedef TuitSchema Represents tuit schema in mongoose
 * @property {string} tuit tuit created by users
 * @property {User} postedBy user which created the tuit
 * @property {Date} postedOn time the tuit was created
 */
const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    postedOn: {type: Date, default: Date.now},
}, {collection: 'tuits'});
export default TuitSchema;