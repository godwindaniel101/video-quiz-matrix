import { createClient } from "redis";
import redis from "redis";
import log from "../utils/log";

const redis_port = +process.env.REDIS_PORT! as number || 6379;
const redis_host = process.env.REDIS_HOST! as string || 'iredis';

//creates an instance of redis connection
const client = redis.createClient({ host: redis_host, port: redis_port });

client.on("error", (err) => {
  log.info(`Redis Error : ${err}`);
});
export default client;
