import "dotenv/config";
import {createConnection} from "typeorm";
import fs from "fs";

export const cloudConnection = async () => {
  await createConnection({
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
    ssl: {ca: fs.readFileSync("./ca-certificate.crt")},
    entities: [__dirname, "./dist/entity/*.*"],
  });
};
