import "reflect-metadata";
import "dotenv/config";
import {ApolloServer} from "apollo-server-express";
//import {createConnection} from "typeorm";
import express from "express";
import http from "http";
import cors from "cors";
import {subscribe, execute} from "graphql";
import {SubscriptionServer} from "subscriptions-transport-ws";
import {shcemaIndex} from "./resolvers";
import session from "express-session";
import connectRedis from "connect-redis";
import redis from "redis";

//import {cloudConnection} from "./cloud.connection";
import {createConnection} from "typeorm";

const main = async () => {
  await createConnection();

  //await cloudConnection();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({
    host: process.env.PARKING_REDIS,
    auth_pass: process.env.PARKING_PASSWORD,
    port: 25061,
    tls: 25061,
  });

  const app = express();

  const httpServer = http.createServer(app);

  app.set("trust proxy", true);

  app.use(
    cors({
      credentials: true,
      origin: [
        "https://studio.apollographql.com",
        "http://localhost:4000/graphql",
        "http://localhost:3000",
      ],
    })
  );

  app.use(
    session({
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
    })
  );

  redisClient.on("error", function (error) {
    console.error(error);
  });

  const schema = await shcemaIndex;

  const server = new ApolloServer({
    schema,
    context: ({req, res}) => ({
      req,
      res,
      redis,
    }),
  });

  await server.start();

  server.applyMiddleware({app, path: "/graphql", cors: false});

  SubscriptionServer.create(
    {schema, subscribe, execute},
    {server: httpServer, path: server.graphqlPath}
  );

  httpServer.listen({port: process.env.PORT || 4000}, () => {
    console.log(`sever running on http://localhost:4000${server.graphqlPath}`);
  });
};

main();
