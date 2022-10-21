import User from "./User";

/**
 * @class Tuit Implements RESTful Web service API for tuit resource.
 * RESTful Web service API
 */
export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User | null = null;
}

