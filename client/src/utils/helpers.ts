import { IError } from "../interface/IError";

import dayjs from "dayjs";

//convert timestamp into date
export const timeStampToDate = (timestamp: string | number, description: boolean = false): string | Date => {
  var date = new Date(Number(timestamp) * 1000);
  return  date.toLocaleString("default", { year: "numeric", month: "2-digit", day:"2-digit"});;
};

//convert timestamp into date with more details than the former
export const timeStampToFullDate = (timestamp: string | number, description: boolean = false): string | Date => {
  var date = new Date(Number(timestamp) * 1000);
  var day = date.getDate();
  var month = date.toLocaleString("default", { month: "long" });
  var year = date.getFullYear();
  var mood = date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  return month + " " + day + " , " + year + " at " + mood;
};

//get timestamp for 24horus ago
export const getPastDaytime = () => {
  const data = new Date().getTime() - 24 * 3600;
  return data;
};

//convert date to timestamp
export const getCalendarTimestamp = (date: any) => {
  const formatted_date = dayjs(date).format("YYYY-MM-DD");

  return new Date(formatted_date).getTime();
};

//reduce figures of btc to make it look more presentable
export const toBtc = (val: number | string) => {
  return (Number(val) / 1000000).toFixed(3);
};

//add comma after every 3 count
export const addComma = (x: number | string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//helps present error message properly
export const getApiErrorMessage = (error: IError) => {
  if (error.response) {
    return "Request made and server responded with " + error.response.status;
  } else if (error.request) {
    return "The request was made but no response was received";
  } else {
    return "Something happened in setting up the request that triggered an Error";
  }
};

//helps control string length
export const helpers = (val: string, length: number) => {
  return val.length > length ? val.substring(0, length) + "...." : val;
};
