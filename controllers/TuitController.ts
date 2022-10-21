
import {Request, Response, Express} from "express";
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitController";
import Tuit from "../models/Tuit";

export default class TuitController implements TuitControllerI {
    private static tuitDao: TuitDao = TuitDao.getInstance();
        private static tuitController: TuitController | null = null;

        /**
         * Creates singleton controller instance
         * @param {Express} app Express instance to declare the RESTful Web service
         * API
         * @return TuitController
         */
        public static getInstance = (app: Express): TuitController => {
            if (TuitController.tuitController === null) {
                TuitController.tuitController = new TuitController();
                app.get("/api/tuits", TuitController.tuitController.findAllTuits);
                app.get("/api/users/:uid/tuits", TuitController.tuitController.findTuitsByUser);
                app.get("/api/tuits/:uid", TuitController.tuitController.findTuitById);
                app.post("/api/users/:uid/tuits", TuitController.tuitController.createTuit);
                app.delete("/api/tuits/:uid", TuitController.tuitController.deleteTuit);
            }
            return TuitController.tuitController;
        }

        private constructor() {
        }

        /**
         * Retrieves all tuits from the database and returns an array of tuits.
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the tuit objects
         */
        findAllTuits = (req: Request, res: Response) =>
            TuitController.tuitDao.findAllTuits()
                .then((tuits: Tuit[]) => res.json(tuits));

        /**
         * Retrieves all tuits from the database for a particular user and returns
         * an array of tuits.
         * @param {Request} req Represents request from client
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON arrays containing the tuit objects
         */
        findTuitsByUser = (req: Request, res: Response) =>
            TuitController.tuitDao.findTuitsByUser(req.params.uid)
                .then((tuits: Tuit[]) => res.json(tuits));

        /**
         * @param {Request} req Represents request from client, including path
         * parameter tid identifying the primary key of the tuit to be retrieved
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the tuit that matches the user ID
         */
        findTuitById = (req: Request, res: Response) =>
            TuitController.tuitDao.findTuitById(req.params.uid)
                .then((tuit: Tuit) => res.json(tuit));

        /**
         * @param {Request} req Represents request from client, including body
         * containing the JSON object for the new tuit to be inserted in the
         * database
         * @param {Response} res Represents response to client, including the
         * body formatted as JSON containing the new tuit that was inserted in the
         * database
         */
        createTuit = (req: Request, res: Response) =>
            TuitController.tuitDao.createTuit(req.params.uid, req.body)
                .then((tuit: Tuit) => res.json(tuit));

        /**
         * @param {Request} req Represents request from client, including path
         * parameter tid identifying the primary key of the tuit to be removed
         * @param {Response} res Represents response to client, including status
         * on whether deleting a user was successful or not
         */
        deleteTuit = (req: Request, res: Response) =>
            TuitController.tuitDao.deleteTuit(req.params.uid)
                .then((status) => res.send(status));
}