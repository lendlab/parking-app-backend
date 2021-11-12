"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const graphql_1 = require("graphql");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const resolvers_1 = require("./resolvers");
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const redis_1 = __importDefault(require("redis"));
const cloud_connection_1 = require("./cloud.connection");
const main = async () => {
    await (0, cloud_connection_1.cloudConnection)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redisClient = redis_1.default.createClient({
        host: process.env.PARKING_REDIS,
        auth_pass: process.env.PARKING_PASSWORD,
        port: 25061,
        tls: 25061,
    });
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    app.set("trust proxy", true);
    app.use((0, cors_1.default)({
        credentials: true,
        origin: [
            "https://studio.apollographql.com",
            "http://localhost:4000/graphql",
            "http://localhost:3000",
        ],
    }));
    app.use((0, express_session_1.default)({
        name: "qid",
        store: new RedisStore({
            client: redisClient,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 24 * 60 * 60 * 60,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        },
        saveUninitialized: false,
        secret: "qiwroasdjlasddde",
        resave: false,
    }));
    redisClient.on("error", function (error) {
        console.error(error);
    });
    const schema = await resolvers_1.shcemaIndex;
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({
            req,
            res,
            redis: redis_1.default,
        }),
    });
    await server.start();
    server.applyMiddleware({ app, path: "/graphql", cors: false });
    subscriptions_transport_ws_1.SubscriptionServer.create({ schema, subscribe: graphql_1.subscribe, execute: graphql_1.execute }, { server: httpServer, path: server.graphqlPath });
    httpServer.listen({ port: process.env.PORT || 4000 }, () => {
        console.log(`sever running on http://localhost:4000${server.graphqlPath}`);
    });
};
main();
//# sourceMappingURL=index.js.map