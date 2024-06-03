import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import cors from "cors";
import requestIp from "request-ip";
const app = express();
const httpServer = createServer(app);
import { rateLimit } from "express-rate-limit";
import userRouter from "./routes/user.routes.js";
import expenseGroupRouter from "./routes/expensegroup.routes.js";
import expenseRouter from "./routes/expense.routes.js";
const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  },
});

app.set("io", io);

const allowedOrigins =
  process.env.CORS_ORIGIN === "*" ? "*" : process.env.CORS_ORIGIN.split(",");

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (allowedOrigins === "*") {
    corsOptions = { origin: "*", credentials: true };
  } else if (allowedOrigins.includes(req.header("Origin"))) {
    corsOptions = { origin: req.header("Origin"), credentials: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));

app.use(requestIp.mw());
// Rate limiter to avoid misuse of the service and avoid cost spikes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5000, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req, res) => {
    return req.clientIp; // IP address from requestIp.mw(), as opposed to req.ip
  },
  handler: (_, __, ___, options) => {
    throw new ApiError(
      options.statusCode || 500,
      `There are too many requests. You are only allowed ${
        options.max
      } requests per ${options.windowMs / 60000} minutes`
    );
  },
});
app.use(limiter);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // configure static file to save images locally
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
//* expense Split-app api's
app.use("/api/v1/expensegroup", expenseGroupRouter);
app.use("/api/v1/expense", expenseRouter);
export { httpServer };
