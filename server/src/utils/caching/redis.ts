import client from "../../database/redis";
import log from "../log";

const redis_duration = (+process.env.REDIS_TIME! as number) || 3600;

//get record from redis server
export const get = (id: string) => {
  return new Promise((resolve, reject) => {
    client.get(id, (e, data) => {
      if (e) {
        log.error(e);
        reject(e);
      }
      resolve(data);
    });
  });
};

// store record to redis server
export const set = (id: string, val: string) => {
  client.setex(id, redis_duration, val);
  return true;
};
