
import Tuit from "../models/Tuit";

export default interface TuitDaoI {
    findAllTuits(): Promise<Tuit[]>;

    findTuitsByUser(uid: string): Promise<Tuit[]>;

    findTuitById(tid: string): Promise<Tuit>;

    createTuit(uid: string, tuit: Tuit): Promise<Tuit>;

    deleteTuit(tid: string): Promise<any>;
}
