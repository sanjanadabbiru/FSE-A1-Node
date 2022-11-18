"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema to CRUD for
 * documents in the tuit collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * @typedef TuitSchema Represents tuit schema in mongoose
 * @property {string} tuit tuit created by users
 * @property {User} postedBy user which created the tuit
 * @property {Date} postedOn time the tuit was created
 */
const TuitSchema = new mongoose_1.default.Schema({
    tuit: { type: String, required: true },
    postedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "UserModel" },
    postedOn: { type: Date, default: Date.now },
}, { collection: 'tuits' });
exports.default = TuitSchema;
