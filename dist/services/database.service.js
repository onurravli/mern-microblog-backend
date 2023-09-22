"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.connectToDatabase = exports.collections = void 0;
const mongoDB = __importStar(require("mongodb"));
const dotenv = __importStar(require("dotenv"));
const betty_1 = __importDefault(require("../utils/betty"));
exports.collections = {};
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    betty_1.default.info('Starting the database service.');
    try {
        betty_1.default.info('Loading environment variables.');
        dotenv.config();
        betty_1.default.info('Environment variables loaded.');
        const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING ? process.env.DB_CONN_STRING : '');
        betty_1.default.info('Connecting to database.');
        yield client.connect();
        const db = client.db(process.env.DB_NAME);
        const postsCollection = db.collection(process.env.POSTS_COLLECTION_NAME ? process.env.POSTS_COLLECTION_NAME : '');
        const usersCollection = db.collection(process.env.USERS_COLLECTION_NAME ? process.env.USERS_COLLECTION_NAME : '');
        exports.collections.posts = postsCollection;
        exports.collections.users = usersCollection;
        betty_1.default.info(`Connected to database (${process.env.DB_NAME}).`);
    }
    catch (error) {
        betty_1.default.error(`Error connecting to database: ${error.message}`);
        throw new Error(error);
    }
});
exports.connectToDatabase = connectToDatabase;
