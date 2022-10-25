"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Tuit Implements RESTful Web service API for tuit resource.
 * RESTful Web service API
 */
class Tuit {
    constructor() {
        this.tuit = '';
        this.postedOn = new Date();
        this.postedBy = null;
    }
}
exports.default = Tuit;
