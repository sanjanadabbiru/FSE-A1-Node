import User from "./User";
import { ObjectId } from "mongoose";

/**
 * @class Tuit Implements RESTful Web service API for tuit resource.
 * RESTful Web service API
 */
export default class Tuit {
   private tuit: string = '';
   private postedOn: Date = new Date();
   private postedBy: User | null = null;
}

