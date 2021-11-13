"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudConnection = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const fs_1 = __importDefault(require("fs"));
const cloudConnection = async () => {
    await (0, typeorm_1.createConnection)({
        name: "default",
        type: "mysql",
        username: process.env.PARKING_DB_USER,
        password: process.env.PARKING_DB_PASSWORD,
        host: process.env.PARKING_URI,
        database: process.env.PARKING_DB,
        port: 25060,
        connectTimeout: 60 * 60 * 1000,
        acquireTimeout: 60 * 60 * 1000,
        synchronize: true,
        logging: true,
        ssl: { ca: fs_1.default.readFileSync("./ca-certificate.crt") },
        entities: [__dirname, "./dist/entity/*.*"],
    });
};
exports.cloudConnection = cloudConnection;
//# sourceMappingURL=cloud.connection.js.map