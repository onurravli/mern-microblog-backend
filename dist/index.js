"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const posts_router_1 = require("./routes/posts.router");
const users_router_1 = require("./routes/users.router");
const betty_1 = __importDefault(require("./utils/betty"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res
        .set('Content-Type', 'application/json')
        .send(JSON.stringify({
        message: 'Welcome to the MERN Microblog Backend Service!',
        endpoints: [
            'GET /posts',
            'GET /posts/:id',
            'POST /posts',
            'PUT /posts/:id',
            'DELETE /posts/:id',
            'GET /users',
        ],
    }))
        .status(200);
    betty_1.default.info('GET /');
});
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use('/posts', posts_router_1.postsRouter);
    app.use('/users', users_router_1.usersRouter);
    app.listen(port);
})
    .catch((error) => {
    betty_1.default.error(`Error connecting to database: ${error.message}`);
});
