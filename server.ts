import bodyParser from "body-parser";
import express from "express";
import DB from "./config/db";
import Route from "./route";
import env from './env';

function start() {
  const app = express();
  try {
    if(!env.APP_SECRET) throw 'PLEASE GENERATE APP KEY'
    app.listen(env.APP_PORT, () => {
      app.use(express.json());
      app.use(bodyParser.json({limit: "50mb"}));
      app.use(Route);
      console.log(`server started http://127.0.0.1:${env.APP_PORT}`);
    });
    DB.start();
  } catch (error) {
    console.log(error);
  }
}

start();
