"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const database_service_1 = require("../services/database.service");
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const betty_1 = __importDefault(require("../utils/betty"));
exports.postsRouter = express_1.default.Router();
exports.postsRouter.use(express_1.default.json());
exports.postsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const posts = yield ((_a = database_service_1.collections.posts) === null || _a === void 0 ? void 0 : _a.find().toArray());
        res.status(200).send(posts);
        betty_1.default.info('GET /posts');
    }
    catch (err) {
        betty_1.default.error(err);
    }
}));
exports.postsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const post = yield ((_b = database_service_1.collections.posts) === null || _b === void 0 ? void 0 : _b.findOne({
            _id: new mongodb_1.ObjectId(req.params.id),
        }));
        res.status(200).send(post);
        betty_1.default.info(`GET /posts/${req.params.id}`);
    }
    catch (err) {
        betty_1.default.error(err);
    }
}));
exports.postsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const post = req.body;
        const result = yield ((_c = database_service_1.collections.posts) === null || _c === void 0 ? void 0 : _c.insertOne(post));
        res.status(201).send(result);
        betty_1.default.info(`POST /posts`);
    }
    catch (err) {
        betty_1.default.error(err);
    }
}));
exports.postsRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const post = req.body;
        const result = yield ((_d = database_service_1.collections.posts) === null || _d === void 0 ? void 0 : _d.updateOne({ _id: new mongodb_1.ObjectId(req.params.id) }, { $set: post }));
        res.status(200).send(result);
        betty_1.default.info(`PUT /posts/${req.params.id}`);
    }
    catch (err) {
        betty_1.default.error(err);
    }
}));
exports.postsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const result = yield ((_e = database_service_1.collections.posts) === null || _e === void 0 ? void 0 : _e.deleteOne({
            _id: new mongodb_1.ObjectId(req.params.id),
        }));
        res.status(200).send(result);
        betty_1.default.info(`DELETE /posts/${req.params.id}`);
    }
    catch (err) {
        betty_1.default.error(err);
    }
}));
