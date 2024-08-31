import { io } from "socket.io-client";
import {REACT_APP_API_URL} from "../../constants"

const URL = process.env.NODE_ENV === 'production' ? undefined : REACT_APP_API_URL;
const socket = io(URL);

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;