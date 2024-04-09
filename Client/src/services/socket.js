import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:8080';
const socket = io(URL);

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;