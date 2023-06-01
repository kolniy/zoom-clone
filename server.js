import http from "http";
import express from "express";
import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import twilio from "twilio";

const PORT = process.env.PORT || 6500;
const app = express();

const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
