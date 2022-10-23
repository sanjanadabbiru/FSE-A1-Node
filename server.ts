/**
 * @file Implements an Express Node HTTP server.
 */
import UserController from './controllers/UserController';
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
 import UserDao from './daos/UserDao';
 import TuitDao from './daos/TuitDao';
import express, {Request, Response} from 'express';
const mongoose = require('mongoose');



// mongoose.connect('mongodb+srv://SanjanaDabbiru:'+process.env.DB_PASSWORD+'@cluster0.1vqotnx.mongodb.net/tuiter');
mongoose.connect(`mongodb+srv://SanjanaDabbiru:${process.env.DB_PASSWORD}@cluster0.1vqotnx.mongodb.net/tuiter`);

var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
extended: false
}));
app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

// const userDao = new UserDao();
// const tuitDao = new TuitDao();
// const userController = new UserController(app,userDao);
// const tuitController = new TuitController(app,tuitDao);


const userController = UserController.getUserController(app);
const tuitController = TuitController.getTuitController(app);
const likesController = LikeController.getLikeController(app);
const followController = FollowController.getFollowController(app);
const bookmarkController = BookmarkController.getBookmarkController(app);
const messageController = MessageController.getMessageController(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4003;
app.listen(process.env.PORT || PORT);