import "./utils/interface/global";
import helmet from "helmet";
import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import { appLimit } from "./middleware/limiter";
import globalError from "./utils/error/globalError";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import restRoutes from "./services/rest/routes";
import schema from "./services/graphicQl/schema";
import * as Sentry from "@sentry/node";
import { notFound } from "./utils/api/notfound";
// import { sentry } from './utils/log/sentry';

const app = express();
//instantiating error logging
Sentry.init({ dsn: "https://1e06c79ba484483fbbdb988c0f79ba6f@o1050192.ingest.sentry.io/6031430" });

//request logger
app.use(Sentry.Handlers.requestHandler());

//Body parser, reading data from body to req.body
app.use(express.json());

// https://stackabuse.com/handling-cors-with-node-js ; allows all cors request
app.use(cors());

//this gives extra level of protection by adding some security header
app.use(helmet());

// sanitizes user-supplied data to prevent MongoDB Operator Injection
app.use(mongoSanitize());

//limit the number of call made the software
app.use(appLimit);

//entry point for api calls
app.use("/api/v1", restRoutes);

//entry point for api calls
app.use("/api/v2", graphqlHTTP({ schema, graphiql: true }));

app.use("/", notFound);

//error logger
app.use(Sentry.Handlers.errorHandler());

//catch all errors
app.use(globalError);

export default app;
